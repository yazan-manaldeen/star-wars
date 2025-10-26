import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-film',
  templateUrl: './add-starship.component.html',
  styleUrl: './add-starship.component.scss'
})
export class AddStarshipComponent {

  readonly dialogRef = inject(MatDialogRef<AddStarshipComponent>);
  formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    model: ['', Validators.required],
    starship_class: ['', Validators.required],
    manufacturer: ['', Validators.required],
    cost_in_credits: ['', Validators.required],
    length: ['', Validators.required],
    crew: ['', Validators.required],
    passengers: ['', Validators.required],
    max_atmosphering_speed: ['', Validators.required],
    hyperdrive_rating: ['', Validators.required],
    MGLT: ['', Validators.required],
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
