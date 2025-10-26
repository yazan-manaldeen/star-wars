import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrl: './add-planet.component.scss'
})
export class AddPlanetComponent {

  readonly dialogRef = inject(MatDialogRef<AddPlanetComponent>);
  formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    createdBy: ['', Validators.required],
    genre: ['', Validators.required],
    races: ['', Validators.required]
  });

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
