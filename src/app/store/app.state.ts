import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {forkJoin, tap} from "rxjs";
import {AppService} from "@app/services/app.service";
import {
  GetDataArray,
  GetDataToSelected,
  GetObjectById,
  ResetObjectsArray,
  ResetSelectedObject
} from "@app/store/app.action";
import {produce} from "immer";


interface AppStateModel {
  pending: boolean;
  objectsArray: any[];
  selectedObject: any;
}

const defaults: AppStateModel = {
  pending: true,
  objectsArray: [],
  selectedObject: null
}

@State({
  name: "appState",
  defaults
})

@Injectable()
export class AppState {

  constructor(private _appService: AppService) {
  }

  @Selector()
  static pending(state: AppStateModel): boolean {
    return state.pending;
  }

  @Selector()
  static objectsArray(state: AppStateModel): any[] {
    return state.objectsArray;
  }

  @Selector()
  static selectedObject(state: AppStateModel): any {
    return state.selectedObject;
  }

  @Action(GetDataArray)
  getDataArray({setState, getState, patchState}: StateContext<AppStateModel>,
               {dataType}: GetDataArray) {
    patchState({pending: true});
    return this._appService.getDataArray(dataType).pipe(
      tap((res) => {
        setState(produce(getState(), state => {
          state.objectsArray = res['results'];
          state.pending = false;
        }));
      })
    );
  }

  @Action(GetObjectById)
  getObjectById({setState, getState, patchState, dispatch}: StateContext<AppStateModel>,
                {objType, objId, childrenArray}: GetObjectById) {
    patchState({pending: true});
    return this._appService.getObjectById(objType, objId).pipe(
      tap((res) => {
        setState(produce(getState(), state => {
          state.selectedObject = res;
          state.pending = false;
        }));
        childrenArray.map(ele => dispatch(new GetDataToSelected(ele)));
      })
    );
  }

  @Action(GetDataToSelected)
  getDataToSelected({getState, setState}: StateContext<AppStateModel>, {propName}: GetDataToSelected) {
    const selected = getState().selectedObject;
    const data = selected[propName];
    if (Array.isArray(data)) {
      const array = data.map((url: string) => this._appService.getDataByURL(url));
      return forkJoin(array).pipe(
        tap(res => {
          setState(produce(getState(), state => {
            state.selectedObject[propName] = res;
          }));
        })
      );
    }
    return this._appService.getDataByURL(data).pipe(
      tap(res => {
        setState(produce(getState(), state => {
          state.selectedObject[propName] = res;
        }));
      })
    );
  }


  @Action(ResetObjectsArray)
  resetObjectsArray({setState, getState}: StateContext<AppStateModel>) {
    setState(produce(getState(), state => {
      state.objectsArray = [];
    }));
  }

  @Action(ResetSelectedObject)
  resetSelectedObject({setState, getState}: StateContext<AppStateModel>) {
    setState(produce(getState(), state => {
      state.selectedObject = null;
    }));
  }
}
