import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDatepicker} from "@angular/material/datepicker";
import {Moment} from 'moment';
import {provideMomentDateAdapter} from "@angular/material-moment-adapter";


export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.scss',
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
  ]
})
export class AddFilmComponent {

  readonly dialogRef = inject(MatDialogRef<AddFilmComponent>);
  formGroup: FormGroup = this.fb.group({
    title: ['', Validators.required],
    director: ['', Validators.required],
    producer: ['', Validators.required],
    erscheinungsdatum: new FormControl(null, [Validators.required]),
    beschreibung: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  setYear(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const date = this.formGroup.get('erscheinungsdatum');
    const ctrlValue = date?.value;
    ctrlValue.year(normalizedYear.year());
    date?.setValue(ctrlValue);
    datepicker.close();
  }

  onSubmit(value: any) {
    value['erscheinungsdatum'] = value['erscheinungsdatum'].year();
    console.log(value);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
