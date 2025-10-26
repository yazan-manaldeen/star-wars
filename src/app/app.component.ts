import {Component} from '@angular/core';
import {appAnimations} from "@core/animations/app.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: appAnimations
})
export class AppComponent {
  title = 'star-wars';

  navItems = [
    {name: "Star Wars", path: "home", queryParams: {}},
    {name: "Filme", path: "films", queryParams: {page: 1}},
    {name: "Charaktere", path: "characters", queryParams: {page: 1}},
    {name: "Planeten", path: "planets", queryParams: {page: 1}},
    {name: "Fahrzeuge", path: "vehicles", queryParams: {page: 1}},
    {name: "Raumschiffe", path: "starships", queryParams: {page: 1}},
    {name: "Spezies", path: "species", queryParams: {page: 1}}
  ];
}
