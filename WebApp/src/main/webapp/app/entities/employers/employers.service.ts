import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IEmployers } from 'app/shared/model/employers.model';

type EntityResponseType = HttpResponse<IEmployers>;
type EntityArrayResponseType = HttpResponse<IEmployers[]>;

@Injectable({ providedIn: 'root' })
export class EmployersService {
  public resourceUrl = SERVER_API_URL + 'services/dataservice/api/employers';

  constructor(protected http: HttpClient) {}

  create(employers: IEmployers): Observable<EntityResponseType> {
    console.log(this.resourceUrl);    
    return this.http.post<IEmployers>(this.resourceUrl, employers, { observe: 'response' });
  }

  update(employers: IEmployers): Observable<EntityResponseType> {
    console.log(this.resourceUrl);
    return this.http.put<IEmployers>(this.resourceUrl, employers, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    console.log(this.resourceUrl);
    return this.http.get<IEmployers>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    console.log(this.resourceUrl);
    const options = createRequestOption(req);
    return this.http.get<IEmployers[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    console.log(this.resourceUrl);
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
