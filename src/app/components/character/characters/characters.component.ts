import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {AppState} from "@app/store/app.state";
import {objectCardsConfig} from "@app/config/object-cards.config";
import {GetDataArray} from "@app/store/app.action";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {

  objectCardsConfig = objectCardsConfig.character;
  characters$: Observable<any[]> = this._store.select(AppState.objectsArray);

  constructor(private _store: Store) {
    this._store.dispatch(new GetDataArray('people'));
  }
}
