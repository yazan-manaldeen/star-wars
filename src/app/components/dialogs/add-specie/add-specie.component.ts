import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {eyeColorsArray, genderArray} from "@app/config/converter.config";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-specie.component.html',
  styleUrl: './add-specie.component.scss'
})
export class AddSpecieComponent {

  readonly dialogRef = inject(MatDialogRef<AddSpecieComponent>);
  formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    classification: ['', Validators.required],
    designation: ['', Validators.required],
    average_height: ['', Validators.required],
    average_lifespan: ['', Validators.required],
    skin_colors: ['', Validators.required],
    hair_colors: ['', Validators.required],
    eye_colors: ['', Validators.required],
    language: ['', Validators.required],
  });
  genderArray = genderArray;
  eyeColorsArray = eyeColorsArray;

  constructor(private fb: FormBuilder) {
  }

  onSubmit(value: any) {
    console.log(value);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
