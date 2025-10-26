import {Component, OnDestroy} from '@angular/core';
import {Store} from "@ngxs/store";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, Subject, takeUntil} from "rxjs";
import {AppState} from "@app/store/app.state";
import {objectDetailsConfig} from "@app/config/object-details.config";
import {GetObjectById} from "@app/store/app.action";
import {appConfig} from "@app/config/app.config";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss'
})
export class FilmDetailsComponent implements OnDestroy {

  filmId!: number;
  film$: Observable<any> = this._store.select(AppState.selectedObject);
  objectDetailsConfig = objectDetailsConfig.film;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store
  ) {
    this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe((params: Params) => {
      this.filmId = +params['filmId'];
      this._store.dispatch(new GetObjectById('films', +params['filmId'], appConfig.filmChildrenArray));
    });
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
