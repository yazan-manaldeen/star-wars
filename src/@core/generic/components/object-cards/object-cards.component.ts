import {Component, Input, OnDestroy} from '@angular/core';
import {Store} from "@ngxs/store";
import {appAnimations} from "@core/animations/app.animations";
import {GetDataArray, ResetObjectsArray} from "@app/store/app.action";
import {getObjectId} from "@app/utils/app.utils";
import {AppState} from "@app/store/app.state";
import {Observable, Subject, takeUntil} from "rxjs";
import {PaginationModel} from "@core/generic/models/pagination.model";
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {objectCardsConfig} from "@app/config/object-cards.config";

@Component({
  selector: 'app-object-cards',
  templateUrl: './object-cards.component.html',
  styleUrl: './object-cards.component.scss',
  animations: appAnimations
})
export class ObjectCardsComponent implements OnDestroy {

  config: any;
  list: Observable<any[]> = this._store.select(AppState.objectsArray);
  pagination$: Observable<PaginationModel> = this._store.select(AppState.pagination);
  pending$: Observable<boolean> = this._store.select(AppState.pending);

  getObjectId = getObjectId;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _store: Store,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  @Input() set type(type: string) {
    this.config = objectCardsConfig[type];
    this._activatedRoute.queryParams.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe((params: Params) => {
      if (!+params['page']) {
        this.changePage({pageIndex: 0, pageSize: 10, length: 0});
        return;
      }
      this._store.dispatch(new GetDataArray(type, +params['page']));
    });
  }

  changePage($event: PageEvent) {
    this._router.navigate(
      [],
      {
        relativeTo: this._activatedRoute,
        queryParams: {page: $event.pageIndex + 1},
        queryParamsHandling: 'merge',
      }
    );
  }

  ngOnDestroy() {
    this._store.dispatch(new ResetObjectsArray());
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
