import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Moment} from "moment/moment";
import {MatDatepicker} from "@angular/material/datepicker";
import {provideMomentDateAdapter} from "@angular/material-moment-adapter";
import {eyeColorsArray, genderArray} from "@app/config/converter.config";


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
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrl: './add-people.component.scss',
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
  ]
})
export class AddPeopleComponent {

  readonly dialogRef = inject(MatDialogRef<AddPeopleComponent>);
  formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    height: ['', Validators.required],
    mass: ['', Validators.required],
    hair_color: ['', Validators.required],
    eye_color: ['', Validators.required],
    birth_year: new FormControl(null, [Validators.required]),
    gender: ['', Validators.required],
  });
  genderArray = genderArray;
  eyeColorsArray = eyeColorsArray;

  constructor(private fb: FormBuilder) {
  }

  setYear(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const date = this.formGroup.get('birth_year');
    const ctrlValue = date?.value;
    ctrlValue.year(normalizedYear.year());
    date?.setValue(ctrlValue);
    datepicker.close();
  }

  onSubmit(value: any) {
    value['birth_year'] = value['birth_year'].year();
    console.log(value);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
