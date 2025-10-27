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
import {PaginationModel} from "@core/generic/models/pagination.model";
import {ActivatedRoute, Router} from "@angular/router";


interface AppStateModel {
  pending: boolean;
  pagination: PaginationModel;
  objectsArray: { [key: string]: any[] };
  selectedObject: any;
  pendingChildren: boolean;
}

const defaults: AppStateModel = {
  pending: true,
  pagination: {
    total: null,
    total_pages: null,
    page: 1,
    per_page: 10
  },
  objectsArray: {},
  selectedObject: null,
  pendingChildren: true
}

@State({
  name: "appState",
  defaults
})

@Injectable()
export class AppState {

  constructor(
    private _appService: AppService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  @Selector()
  static pending(state: AppStateModel): boolean {
    return state.pending;
  }

  @Selector()
  static pendingChildren(state: AppStateModel): boolean {
    return state.pendingChildren;
  }

  @Selector()
  static pagination(state: AppStateModel): PaginationModel {
    return state.pagination;
  }

  @Selector()
  static objectsArray(state: AppStateModel): any[] {
    return state.objectsArray[`${state.pagination.page}`];
  }

  @Selector()
  static selectedObject(state: AppStateModel): any {
    return state.selectedObject;
  }

  @Action(GetDataArray)
  getDataArray({setState, getState}: StateContext<AppStateModel>,
               {dataType, page}: GetDataArray) {
    if (getState().objectsArray[`${page}`]) {
      setState(produce(getState(), state => {
        state.pagination.page = page;
      }));
      return undefined;
    }
    setState(produce(getState(), state => {
      state.pending = true;
      state.pagination.page = page;
    }));
    return this._appService.getDataArray(dataType, page).pipe(
      tap((res) => {
        setState(produce(getState(), state => {
          state.objectsArray[`${page}`] = res['results'];
          state.pagination.total = res['count'];
          state.pagination.total_pages = Math.ceil(+res['count'] / page);
          state.pending = false;
        }));
      }, error => {
        this._router.navigate(
          [],
          {
            relativeTo: this._activatedRoute,
            queryParams: {page: 1},
            queryParamsHandling: 'merge',
          }
        );
      })
    );
  }

  @Action(GetObjectById)
  getObjectById({setState, getState, dispatch}: StateContext<AppStateModel>,
                {objType, objId, childrenArray}: GetObjectById) {
    setState(produce(getState(), state => {
      state.pending = true;
    }));
    return this._appService.getObjectById(objType, objId).pipe(
      tap((res) => {
        setState(produce(getState(), state => {
          state.selectedObject = res;
          state.pending = false;
        }));
        childrenArray.map(ele => dispatch(new GetDataToSelected(ele)));
      }, error => {
        this._router.navigate(
          ['/home'],
          {
            queryParams: {},
            queryParamsHandling: 'preserve',
          }
        );
      })
    );
  }

  @Action(GetDataToSelected)
  getDataToSelected({getState, setState}: StateContext<AppStateModel>, {propName}: GetDataToSelected) {
    setState(produce(getState(), state => {
      state.pendingChildren = true;
    }));
    const selected = getState().selectedObject;
    const data = selected[propName];
    if (Array.isArray(data)) {
      const array = data.map((url: string) => this._appService.getDataByURL(url));
      return forkJoin(array).pipe(
        tap(res => {
          setState(produce(getState(), state => {
            state.selectedObject[propName] = res;
            state.pendingChildren = false;
          }));
        })
      );
    }
    return this._appService.getDataByURL(data).pipe(
      tap(res => {
        setState(produce(getState(), state => {
          state.selectedObject[propName] = res;
          state.pendingChildren = false;
        }));
      })
    );
  }


  @Action(ResetObjectsArray)
  resetObjectsArray({setState, getState}: StateContext<AppStateModel>) {
    setState(produce(getState(), state => {
      state.objectsArray = defaults.objectsArray;
      state.pagination = defaults.pagination;
    }));
  }

  @Action(ResetSelectedObject)
  resetSelectedObject({setState, getState}: StateContext<AppStateModel>) {
    setState(produce(getState(), state => {
      state.pendingChildren = defaults.pendingChildren;
      state.selectedObject = defaults.selectedObject;
    }));
  }
}
