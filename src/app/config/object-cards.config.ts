import {
  filmThumbnails,
  peopleThumbnails,
  planetThumbnails,
  speciesThumbnails,
  starshipsThumbnails,
  vehiclesThumbnails
} from "@app/config/thumbnails.config";

export interface ObjectCardsConfig {
  title: string;
  images: any;
  titleProp: string;
  displayProps: { label: string; propName: string, suffix?: string }[];
  routerLink: string;
}

export interface AppObjectCardsConfig {
  films: ObjectCardsConfig;
  people: ObjectCardsConfig;
  planets: ObjectCardsConfig;
  vehicles: ObjectCardsConfig;
  starships: ObjectCardsConfig;
  species: ObjectCardsConfig;
}

export const objectCardsConfig: AppObjectCardsConfig = {
  films: {
    title: 'Filme',
    images: filmThumbnails,
    titleProp: 'title',
    displayProps: [
      {label: 'Director:', propName: 'director'},
      {label: 'Produzenten:', propName: 'producer'},
      {label: 'Erscheinungsdatum:', propName: 'release_date'},
    ],
    routerLink: '/film-details/'
  },
  people: {
    title: 'Charaktere',
    images: peopleThumbnails,
    titleProp: 'name',
    displayProps: [
      {label: 'Augenfarbe:', propName: 'eye_color'},
      {label: 'Geburtsjahr:', propName: 'birth_year'},
      {label: 'Geschlecht:', propName: 'gender'},
    ],
    routerLink: '/character-details/'
  },
  planets: {
    title: 'Planeten',
    images: planetThumbnails,
    titleProp: 'name',
    displayProps: [
      {label: 'Rotationsperiode:', propName: 'rotation_period'},
      {label: 'Durchmesser:', propName: 'diameter'},
      {label: 'Terrain:', propName: 'terrain'},
    ],
    routerLink: '/planet-details/'
  },
  vehicles: {
    title: 'Fahrzeuge',
    images: vehiclesThumbnails,
    titleProp: 'name',
    displayProps: [
      {label: 'Modell:', propName: 'model'},
      {label: 'Produzenten:', propName: 'manufacturer'},
      {label: 'Ladekapazität:', propName: 'cargo_capacity', suffix: 'Kg'},
    ],
    routerLink: '/vehicle-details/'
  },
  starships: {
    title: 'Raumschiffe',
    images: starshipsThumbnails,
    titleProp: 'name',
    displayProps: [
      {label: 'Modell:', propName: 'model'},
      {label: 'Produzenten:', propName: 'manufacturer'},
      {label: 'Ladekapazität:', propName: 'cargo_capacity', suffix: 'Kg'},
    ],
    routerLink: '/starship-details/'
  },
  species: {
    title: 'Spezies',
    images: speciesThumbnails,
    titleProp: 'name',
    displayProps: [
      {label: 'Klassifikation:', propName: 'classification'},
      {label: 'Bezeichnung:', propName: 'designation'},
      {label: 'Sprache:', propName: 'language'}
    ],
    routerLink: '/specie-details/'
  }
}
