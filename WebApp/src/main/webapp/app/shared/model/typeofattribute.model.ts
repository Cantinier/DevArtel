export interface ITypeofattribute {
  id?: number;
  name?: string;
  datatype?: string;
}

export class Typeofattribute implements ITypeofattribute {
  constructor(public id?: number, public name?: string, public datatype?: string) {}
}
