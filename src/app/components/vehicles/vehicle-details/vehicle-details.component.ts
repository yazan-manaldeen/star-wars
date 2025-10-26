import {Component, OnDestroy} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngxs/store";
import {AppState} from "@app/store/app.state";
import {objectDetailsConfig} from "@app/config/object-details.config";
import {GetObjectById} from "@app/store/app.action";
import {appConfig} from "@app/config/app.config";

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.scss'
})
export class VehicleDetailsComponent implements OnDestroy {

  vehicleId!: number;
  vehicle$: Observable<any> = this._store.select(AppState.selectedObject);
  objectDetailsConfig = objectDetailsConfig.vehicle;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store
  ) {
    this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe((params: Params) => {
      this.vehicleId = +params['vehicleId'];
      this._store.dispatch(new GetObjectById('vehicles', +params['vehicleId'], appConfig.vehicleChildrenArray));
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
