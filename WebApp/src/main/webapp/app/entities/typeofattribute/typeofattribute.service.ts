import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITypeofattribute } from 'app/shared/model/typeofattribute.model';

type EntityResponseType = HttpResponse<ITypeofattribute>;
type EntityArrayResponseType = HttpResponse<ITypeofattribute[]>;

@Injectable({ providedIn: 'root' })
export class TypeofattributeService {
  public resourceUrl = SERVER_API_URL + 'services/dataservice/api/typeofattribute';

  constructor(protected http: HttpClient) {}

  create(typeofattribute: ITypeofattribute): Observable<EntityResponseType> {
    return this.http.post<ITypeofattribute>(this.resourceUrl, typeofattribute, { observe: 'response' });
  }

  update(typeofattribute: ITypeofattribute): Observable<EntityResponseType> {
    return this.http.put<ITypeofattribute>(this.resourceUrl, typeofattribute, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITypeofattribute>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITypeofattribute[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
