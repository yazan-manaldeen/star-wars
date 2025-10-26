import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@app/components/home/home.component";
import {FilmsComponent} from "@app/components/films/films/films.component";
import {FilmDetailsComponent} from "@app/components/films/film-details/film-details.component";
import {CharactersComponent} from "@app/components/character/characters/characters.component";
import {CharacterDetailsComponent} from "@app/components/character/character-details/character-details.component";
import {PlanetsComponent} from "@app/components/planets/planets/planets.component";
import {PlanetDetailsComponent} from "@app/components/planets/planet-details/planet-details.component";
import {VehiclesComponent} from "@app/components/vehicles/vehicles/vehicles.component";
import {VehicleDetailsComponent} from "@app/components/vehicles/vehicle-details/vehicle-details.component";
import {StarshipsComponent} from "@app/components/starships/starships/starships.component";
import {StarshipDetailsComponent} from "@app/components/starships/starship-details/starship-details.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'films',
    component: FilmsComponent,
    title: 'Filmen'
  },
  {
    path: 'film-details/:filmId',
    component: FilmDetailsComponent,
    title: 'Filmdetails'
  },
  {
    path: 'characters',
    component: CharactersComponent,
    title: 'Charaktere'
  },
  {
    path: 'character-details/:characterId',
    component: CharacterDetailsComponent,
    title: 'Charakterdetails'
  },
  {
    path: 'planets',
    component: PlanetsComponent,
    title: 'Planeten'
  },
  {
    path: 'planet-details/:planetId',
    component: PlanetDetailsComponent,
    title: 'Planetdetails'
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
    title: 'Fahrzeuge'
  },
  {
    path: 'vehicle-details/:vehicleId',
    component: VehicleDetailsComponent,
    title: 'Fahrzeugdetails'
  },
  {
    path: 'starships',
    component: StarshipsComponent,
    title: 'Raumschiffe'
  },
  {
    path: 'starship-details/:starshipId',
    component: StarshipDetailsComponent,
    title: 'Raumschiffsdetails'
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
