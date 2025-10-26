import {Component, OnDestroy} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngxs/store";
import {AppState} from "@app/store/app.state";
import {objectDetailsConfig} from "@app/config/object-details.config";
import {GetObjectById} from "@app/store/app.action";
import {appConfig} from "@app/config/app.config";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnDestroy {

  characterId!: number;
  character$: Observable<any> = this._store.select(AppState.selectedObject);
  objectDetailsConfig = objectDetailsConfig.character;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store
  ) {
    this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe((params: Params) => {
      this.characterId = +params['characterId'];
      this._store.dispatch(new GetObjectById('people', +params['characterId'], appConfig.characterChildrenArray));
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
