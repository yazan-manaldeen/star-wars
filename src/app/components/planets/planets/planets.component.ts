import {Component} from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {
  readonly type: string = 'planets';
}
