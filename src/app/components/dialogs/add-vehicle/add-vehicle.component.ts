import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss'
})
export class AddVehicleComponent {

  readonly dialogRef = inject(MatDialogRef<AddVehicleComponent>);
  formGroup: FormGroup = this.fb.group({
    model: ['', Validators.required],
    vehicle_class: ['', Validators.required],
    manufacturer: ['', Validators.required],
    length: ['', Validators.required],
    crew: ['', Validators.required],
    passengers: ['', Validators.required],
    max_atmosphering_speed: ['', Validators.required],
    cargo_capacity: ['', Validators.required],
    consumables: ['', Validators.required],
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
