import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TitleStrategy} from "@angular/router";
import {NgxsModule} from "@ngxs/store";
import {HttpClientModule} from "@angular/common/http";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {AppComponent} from "@app/app.component";
import {HomeComponent} from "@app/components/home/home.component";
import {FilmsComponent} from "@app/components/films/films/films.component";
import {FilmDetailsComponent} from "@app/components/films/film-details/film-details.component";
import {CharactersComponent} from "@app/components/character/characters/characters.component";
import {CharacterDetailsComponent} from "@app/components/character/character-details/character-details.component";
import {PlanetsComponent} from "@app/components/planets/planets/planets.component";
import {PlanetDetailsComponent} from "@app/components/planets/planet-details/planet-details.component";
import {ObjectCardsComponent} from "@core/generic/components/object-cards/object-cards.component";
import {ObjectDetailsComponent} from "@core/generic/components/object-details/object-details.component";
import {AddPlanetComponent} from "@app/components/dialogs/add-planet/add-planet.component";
import {AddPeopleComponent} from "@app/components/dialogs/add-people/add-people.component";
import {AddFilmComponent} from "@app/components/dialogs/add-film/add-film.component";
import {AppRoutingModule} from "@app/app-routing.module";
import {AppState} from "@app/store/app.state";
import {TitleStrategyService} from "@core/services/title-strategy.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    FilmDetailsComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    PlanetsComponent,
    PlanetDetailsComponent,
    ObjectCardsComponent,
    ObjectDetailsComponent,
    AddPlanetComponent,
    AddPeopleComponent,
    AddFilmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState]),
    MatFormFieldModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInput,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
  ],
  providers: [
    provideAnimationsAsync(),
    {provide: TitleStrategy, useClass: TitleStrategyService},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
