export interface IEmployers {
  id?: number;
  inn?: string;
  kpp?: string;
  ogrn?: string;
  datareg?: string;
  isurlic?: boolean;
  employname?: string;
  description?: string;
}

export class Employers implements IEmployers {
  constructor(
    public id?: number,
    public inn?: string,
    public kpp?: string,
    public ogrn?: string,
    public datareg?: string,
    public isurlic?: boolean,
    public employname?: string,
    public description?: string
  ) {
    this.isurlic = this.isurlic || false;
  }
}
