import {Component, inject, Input, OnDestroy} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngxs/store";
import {appAnimations} from "@core/animations/app.animations";
import {ResetSelectedObject} from "@app/store/app.action";
import {getObjectId} from "@app/utils/app.utils";

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrl: './object-details.component.scss',
  animations: appAnimations
})
export class ObjectDetailsComponent implements OnDestroy {

  @Input() objId: number = 0;
  @Input() config: any = {};
  @Input() dataObj: any;

  getObjectId = getObjectId;

  readonly dialog = inject(MatDialog);

  constructor(private _store: Store) {
  }

  openDialog(component: any) {
    this.dialog.open(component, {autoFocus: false});
  }

  ngOnDestroy() {
    this._store.dispatch(new ResetSelectedObject());
  }
}
