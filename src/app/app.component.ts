import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'star-wars';

  navItems = [
    {name: "Star Wars", path: "home"},
    {name: "Filme", path: "films"},
    {name: "Charaktere", path: "characters"},
    {name: "Planeten", path: "planets"},
    {name: "Fahrzeuge", path: "vehicles"},
    {name: "Raumschiffe", path: "starships"}
  ];
}
