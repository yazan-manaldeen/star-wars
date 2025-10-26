export interface ObjectCardsConfig {
  title: string;
  imgFolder: string;
  titleProp: string;
  displayProps: { label: string; propName: string, suffix?: string }[];
  routerLink: string;
}

export interface AppObjectCardsConfig {
  film: ObjectCardsConfig;
  character: ObjectCardsConfig;
  planet: ObjectCardsConfig;
  vehicle: ObjectCardsConfig;
  starship: ObjectCardsConfig;
  specie: ObjectCardsConfig;
}

export const objectCardsConfig: AppObjectCardsConfig = {
  film: {
    title: 'Filme',
    imgFolder: 'thumbnails',
    titleProp: 'title',
    displayProps: [
      {label: 'Director:', propName: 'director'},
      {label: 'Produzenten:', propName: 'producer'},
      {label: 'Erscheinungsdatum:', propName: 'release_date'},
    ],
    routerLink: '/film-details/'
  },
  character: {
    title: 'Charaktere',
    imgFolder: 'thumbnails',
    titleProp: 'name',
    displayProps: [
      {label: 'Augenfarbe:', propName: 'eye_color'},
      {label: 'Geburtsjahr:', propName: 'birth_year'},
      {label: 'Geschlecht:', propName: 'gender'},
    ],
    routerLink: '/character-details/'
  },
  planet: {
    title: 'Planeten',
    imgFolder: 'planets',
    titleProp: 'name',
    displayProps: [
      {label: 'Rotationsperiode:', propName: 'rotation_period'},
      {label: 'Durchmesser:', propName: 'diameter'},
      {label: 'Terrain:', propName: 'terrain'},
    ],
    routerLink: '/planet-details/'
  },
  vehicle: {
    title: 'Fahrzeuge',
    imgFolder: 'thumbnails',
    titleProp: 'name',
    displayProps: [
      {label: 'Modell:', propName: 'model'},
      {label: 'Produzenten:', propName: 'manufacturer'},
      {label: 'Ladekapazität:', propName: 'cargo_capacity', suffix: 'Kg'},
    ],
    routerLink: '/vehicle-details/'
  },
  starship: {
    title: 'Raumschiffe',
    imgFolder: 'thumbnails',
    titleProp: 'name',
    displayProps: [
      {label: 'Modell:', propName: 'model'},
      {label: 'Produzenten:', propName: 'manufacturer'},
      {label: 'Ladekapazität:', propName: 'cargo_capacity', suffix: 'Kg'},
    ],
    routerLink: '/starship-details/'
  },
  specie: {
    title: 'Spezies',
    imgFolder: 'thumbnails',
    titleProp: 'name',
    displayProps: [
      {label: 'Klassifikation:', propName: 'classification'},
      {label: 'Bezeichnung:', propName: 'designation'},
      {label: 'Sprache:', propName: 'language'}
    ],
    routerLink: '/specie-details/'
  }
}
