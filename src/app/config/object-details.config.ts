import {AddPlanetComponent} from "@app/components/dialogs/add-planet/add-planet.component";
import {AddFilmComponent} from "@app/components/dialogs/add-film/add-film.component";
import {AddCharacterComponent} from "@app/components/dialogs/add-character/add-character.component";
import {AddVehicleComponent} from "@app/components/dialogs/add-vehicle/add-vehicle.component";
import {AddStarshipComponent} from "@app/components/dialogs/add-starship/add-starship.component";

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
  vehicle: ObjectDetailsConfig;
  starship: ObjectDetailsConfig;
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

const vehiclesRelation = {
  title: 'Fahezeuge:',
  dataPath: 'vehicles',
  displayProp: 'name',
  routerLink: '/vehicle-details/',
  component: AddVehicleComponent
};

const starshipsRelation = {
  title: 'Raumschiffe:',
  dataPath: 'starships',
  routerLink: '/starship-details/',
  displayProp: 'name',
  component: AddStarshipComponent
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
  },
  vehicle: {
    title: 'Fahrzeugdetails',
    firstTitleProp: 'name',
    displayProps: [
      {label: 'Modell:', propName: 'model'},
      {label: 'Fahrzeugklasse:', propName: 'vehicle_class'},
      {label: 'Produzenten:', propName: 'manufacturer'},
      {label: 'Länge:', propName: 'length', suffix: 'm'},
      {label: 'Crew:', propName: 'crew', suffix: 'Mann'},
      {label: 'Passagiere:', propName: 'passengers', suffix: 'Mann'},
      {label: 'Maximale atmosphärische Geschwindigkeit:', propName: 'max_atmosphering_speed'},
      {label: 'Ladekapazität:', propName: 'cargo_capacity', suffix: 'Kg'},
      {label: 'Konsumgüter:', propName: 'consumables'},
    ],
    imgFolder: 'thumbnails',
    relations: [
      filmRelation,
      {
        ...characterRelation,
        title: 'Piloten:',
        dataPath: 'pilots'
      },
    ]
  },
  starship: {
    title: 'Raumschiffsdetails',
    firstTitleProp: 'name',
    displayProps: [
      {label: 'Modell:', propName: 'model'},
      {label: 'Raumschiffsklasse:', propName: 'starship_class'},
      {label: 'Produzenten:', propName: 'manufacturer'},
      {label: 'Kosten in Credits:', propName: 'cost_in_credits'},
      {label: 'Länge:', propName: 'length', suffix: 'm'},
      {label: 'Crew:', propName: 'crew', suffix: 'Mann'},
      {label: 'Passagiere:', propName: 'passengers', suffix: 'Mann'},
      {label: 'Maximale atmosphärische Geschwindigkeit:', propName: 'max_atmosphering_speed'},
      {label: 'Hyperantriebsbewertung:', propName: 'hyperdrive_rating'},
      {label: 'MGLT:', propName: 'MGLT'},
      {label: 'Ladekapazität:', propName: 'cargo_capacity', suffix: 'Kg'},
      {label: 'Konsumgüter:', propName: 'consumables'}
    ],
    imgFolder: 'thumbnails',
    relations: [
      filmRelation,
      {
        ...characterRelation,
        title: 'Piloten:',
        dataPath: 'pilots'
      },
    ]
  }
};
