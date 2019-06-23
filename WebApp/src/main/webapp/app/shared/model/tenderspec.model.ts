import { IEmployers } from 'app/shared/model/employers.model';
import { ITender } from 'app/shared/model/tender.model';

export interface ITenderspec {
  id?: number;
  numberofdock?: string;
  description?: string;
  employers?: IEmployers;
  tender?: ITender;
}

export class Tenderspec implements ITenderspec {
  constructor(
    public id?: number,
    public numberofdock?: string,
    public description?: string,
    public employers?: IEmployers,
    public tender?: ITender
  ) {}
}
