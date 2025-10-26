import {Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {AppState} from "@app/store/app.state";
import {objectCardsConfig} from "@app/config/object-cards.config";
import {GetDataArray} from "@app/store/app.action";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent {

  objectCardsConfig = objectCardsConfig.starship;
  starships$: Observable<any[]> = this._store.select(AppState.objectsArray);

  constructor(private _store: Store) {
    this._store.dispatch(new GetDataArray('starships'));
  }
}
