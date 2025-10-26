import {Component, Input, OnDestroy} from '@angular/core';
import {Store} from "@ngxs/store";
import {appAnimations} from "@core/animations/app.animations";
import {ResetObjectsArray} from "@app/store/app.action";
import {getObjectId} from "@app/utils/app.utils";

@Component({
  selector: 'app-object-cards',
  templateUrl: './object-cards.component.html',
  styleUrl: './object-cards.component.scss',
  animations: appAnimations
})
export class ObjectCardsComponent implements OnDestroy {

  @Input() list: any[] = [];
  @Input() config: any = {};

  getObjectId = getObjectId;

  constructor(private _store: Store) {
  }

  ngOnDestroy() {
    this._store.dispatch(new ResetObjectsArray());
  }
}
