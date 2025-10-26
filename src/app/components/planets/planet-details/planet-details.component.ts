import {Component, OnDestroy} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngxs/store";
import {AppState} from "@app/store/app.state";
import {objectDetailsConfig} from "@app/config/object-details.config";
import {GetObjectById} from "@app/store/app.action";
import {appConfig} from "@app/config/app.config";

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.scss'
})
export class PlanetDetailsComponent implements OnDestroy {

  planetId!: number;
  planets$: Observable<any> = this._store.select(AppState.selectedObject);
  objectDetailsConfig = objectDetailsConfig.planet;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store
  ) {
    this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe((params: Params) => {
      this.planetId = +params['planetId'] - 1;
      this._store.dispatch(new GetObjectById('planets', +params['planetId'], appConfig.planetChildrenArray));
    });
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
