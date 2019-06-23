import { IEmployers } from 'app/shared/model/employers.model';
import { ITypeofattribute } from 'app/shared/model/typeofattribute.model';

export interface IAttribute {
  id?: number;
  value?: string;
  idEmployers?: IEmployers;
  idTypeofattribute?: ITypeofattribute;
}

export class Attribute implements IAttribute {
  constructor(public id?: number, public value?: string, public idEmployers?: IEmployers, public idTypeofattribute?: ITypeofattribute) {}
}
