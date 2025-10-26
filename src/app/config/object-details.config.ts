import {AddPlanetComponent} from "@app/components/dialogs/add-planet/add-planet.component";
import {AddFilmComponent} from "@app/components/dialogs/add-film/add-film.component";
import {AddPeopleComponent} from "@app/components/dialogs/add-people/add-people.component";

export interface ObjectDetailsConfig {
  title: string;
  firstTitleProp: string;
  secondTitleLabel?: string;
  secondTitleProp?: string;
  displayProps: { label: string; propName: string; suffix?: string; }[];
  descriptionProp?: string;
  homeworld?: string;
  imgFolder?: string;
  relations: {
    title: string;
    dataPath: string;
    displayProp: string;
    routerLink?: string;
    component?: any;
  }[];
}

export interface AppObjectDetailsConfig {
  film: ObjectDetailsConfig;
  character: ObjectDetailsConfig;
  planet: ObjectDetailsConfig;
}

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
    relations: [
      {
        title: 'Charaktere:',
        dataPath: 'characters',
        displayProp: 'name',
        routerLink: '/character-details/',
        component: AddPeopleComponent
      },
      {
        title: 'Planeten:',
        dataPath: 'planets',
        displayProp: 'name',
        routerLink: '/planet-details/',
        component: AddPlanetComponent
      },
      {
        title: 'Raumschiffe:',
        dataPath: 'starships',
        displayProp: 'name'
      },
      {
        title: 'Fahezeuge:',
        dataPath: 'vehicles',
        displayProp: 'name'
      },
    ]
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
    relations: [
      {
        title: 'Filme:',
        dataPath: 'films',
        displayProp: 'title',
        routerLink: '/film-details/',
        component: AddFilmComponent
      },
      {
        title: 'Raumschiffe:',
        dataPath: 'starships',
        displayProp: 'name'
      },
      {
        title: 'Fahezeuge:',
        dataPath: 'vehicles',
        displayProp: 'name'
      }
    ]
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
    relations: [
      {
        title: 'Filme:',
        dataPath: 'films',
        displayProp: 'title',
        routerLink: '/film-details/',
        component: AddFilmComponent
      },
      {
        title: 'Einwohner:',
        dataPath: 'residents',
        displayProp: 'name',
        routerLink: '/character-details/',
        component: AddPeopleComponent
      },
    ]
  }
};
