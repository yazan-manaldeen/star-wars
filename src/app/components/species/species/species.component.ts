import {Component} from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent {
  readonly type: string = 'species';
}
