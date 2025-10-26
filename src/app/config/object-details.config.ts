import {AddPlanetComponent} from "@app/components/dialogs/add-planet/add-planet.component";
import {AddFilmComponent} from "@app/components/dialogs/add-film/add-film.component";
import {AddCharacterComponent} from "@app/components/dialogs/add-character/add-character.component";

export interface Relation {
  title: string;
  dataPath: string;
  displayProp: string;
  routerLink?: string;
  component?: any;
}

export interface ObjectDetailsConfig {
  title: string;
  firstTitleProp: string;
  secondTitleLabel?: string;
  secondTitleProp?: string;
  displayProps: { label: string; propName: string; suffix?: string; }[];
  descriptionProp?: string;
  homeworld?: string;
  imgFolder?: string;
  relations: Relation[];
}

export interface AppObjectDetailsConfig {
  film: ObjectDetailsConfig;
  character: ObjectDetailsConfig;
  planet: ObjectDetailsConfig;
}

const filmRelation = {
  title: 'Filme:',
  dataPath: 'films',
  displayProp: 'title',
  routerLink: '/film-details/',
  component: AddFilmComponent
};

const characterRelation = {
  title: 'Charaktere:',
  dataPath: 'characters',
  displayProp: 'name',
  routerLink: '/character-details/',
  component: AddCharacterComponent
};

const planetRelation = {
  title: 'Planeten:',
  dataPath: 'planets',
  displayProp: 'name',
  routerLink: '/planet-details/',
  component: AddPlanetComponent
};

const starshipsRelation = {
  title: 'Raumschiffe:',
  dataPath: 'starships',
  displayProp: 'name'
};

const vehiclesRelation = {
  title: 'Fahezeuge:',
  dataPath: 'vehicles',
  displayProp: 'name'
};

export const objectDetailsConfig: AppObjectDetailsConfig = {
  film: {
    title: 'Filmdetails',
    firstTitleProp: 'title',
    secondTitleLabel: 'Episode',
    secondTitleProp: 'episode_id',
    displayProps: [
      {label: 'Director:', propName: 'director'},
      {label: 'Produzenten:', propName: 'producer'},
      {label: 'Erscheinungsdatum:', propName: 'release_date'},
    ],
    descriptionProp: 'opening_crawl',
    imgFolder: 'thumbnails',
    relations: [characterRelation, planetRelation, starshipsRelation, vehiclesRelation]
  },
  character: {
    title: 'Charakterdetails',
    firstTitleProp: 'name',
    displayProps: [
      {label: 'Größe:', propName: 'height', suffix: 'cm'},
      {label: 'Gewicht:', propName: 'mass', suffix: 'Kg'},
      {label: 'Hautfarbe:', propName: 'skin_color'},
      {label: 'Haarfarbe:', propName: 'hair_color'},
      {label: 'Augenfarbe:', propName: 'eye_color'},
      {label: 'Geburtsjahr:', propName: 'birth_year'},
      {label: 'Geschlecht:', propName: 'gender'},
    ],
    imgFolder: 'thumbnails',
    homeworld: 'homeworld',
    relations: [filmRelation, starshipsRelation, vehiclesRelation]
  },
  planet: {
    title: 'Planetdetails',
    firstTitleProp: 'name',
    displayProps: [
      {label: 'Durchmesser:', propName: 'diameter', suffix: 'Km'},
      {label: 'Terrain:', propName: 'terrain'},
      {label: 'Klima:', propName: 'climate'},
      {label: 'Oberflächenwasser:', propName: 'surface_water', suffix: '%'},
      {label: 'Schwerkraft:', propName: 'gravity'},
      {label: 'Bevölkerung:', propName: 'population'},
      {label: 'Rotationsperiode:', propName: 'rotation_period', suffix: 'Uhr'},
      {label: 'Umlaufzeit:', propName: 'orbital_period', suffix: 'Tag'},
    ],
    imgFolder: 'planets',
    relations: [filmRelation,
      {
        ...characterRelation,
        title: 'Einwohner:',
        dataPath: 'residents'
      },
    ]
  }
};
