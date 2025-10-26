import {Component, OnDestroy} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngxs/store";
import {AppState} from "@app/store/app.state";
import {objectDetailsConfig} from "@app/config/object-details.config";
import {GetObjectById} from "@app/store/app.action";
import {appConfig} from "@app/config/app.config";

@Component({
  selector: 'app-specie-details',
  templateUrl: './specie-details.component.html',
  styleUrl: './specie-details.component.scss'
})
export class SpecieDetailsComponent implements OnDestroy {

  specieId!: number;
  specie$: Observable<any> = this._store.select(AppState.selectedObject);
  objectDetailsConfig = objectDetailsConfig.specie;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store
  ) {
    this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe((params: Params) => {
      this.specieId = +params['specieId'] - 1;
      this._store.dispatch(new GetObjectById('species', +params['specieId'], appConfig.specieChildrenArray));
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
