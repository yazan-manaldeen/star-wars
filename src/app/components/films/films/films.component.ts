import {Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {AppState} from "@app/store/app.state";
import {objectCardsConfig} from "@app/config/object-cards.config";
import {GetDataArray} from "@app/store/app.action";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {

  objectCardsConfig = objectCardsConfig.film;
  films$: Observable<any[]> = this._store.select(AppState.objectsArray);

  constructor(private _store: Store) {
    this._store.dispatch(new GetDataArray('films'));
  }
}
