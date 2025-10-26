export class GetDataArray {
  static readonly type = '[App] Get Data Array';

  constructor(public dataType: string, public page: number) {
  }
}

export class GetObjectById {
  static readonly type = '[App] Get Object By Id';

  constructor(public objType: string, public objId: number, public childrenArray: string[]) {
  }
}

export class GetDataToSelected {
  static readonly type = '[App] Get Data To Selected';

  constructor(public propName: string) {
  }
}

export class ResetObjectsArray {
  static readonly type = '[App] Reset Objects Array';

  constructor() {
  }
}

export class ResetSelectedObject {
  static readonly type = '[App] Reset Selected Object';

  constructor() {
  }
}
