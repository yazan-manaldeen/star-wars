import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {AppState} from "@app/store/app.state";
import {objectCardsConfig} from "@app/config/object-cards.config";
import {GetDataArray} from "@app/store/app.action";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {

  objectCardsConfig = objectCardsConfig.planet;
  planets$: Observable<any[]> = this._store.select(AppState.objectsArray);

  constructor(private _store: Store) {
    this._store.dispatch(new GetDataArray('planets'));
  }
}
