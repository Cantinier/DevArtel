import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITenderspec } from 'app/shared/model/tenderspec.model';

type EntityResponseType = HttpResponse<ITenderspec>;
type EntityArrayResponseType = HttpResponse<ITenderspec[]>;

@Injectable({ providedIn: 'root' })
export class TenderspecService {
  public resourceUrl = SERVER_API_URL + 'services/dataservice/api/tenderspec';

  constructor(protected http: HttpClient) {}

  create(tenderspec: ITenderspec): Observable<EntityResponseType> {
    return this.http.post<ITenderspec>(this.resourceUrl, tenderspec, { observe: 'response' });
  }

  update(tenderspec: ITenderspec): Observable<EntityResponseType> {
    return this.http.put<ITenderspec>(this.resourceUrl, tenderspec, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITenderspec>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITenderspec[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
