export interface ITender {
  id?: number;
  nomertender?: string;
  datarun?: string;
  dataend?: string;
  idUser?: number;
}

export class Tender implements ITender {
  constructor(public id?: number, public nomertender?: string, public datarun?: string, public dataend?: string, public idUser?: number) {}
}
