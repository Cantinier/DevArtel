import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITender } from 'app/shared/model/tender.model';

type EntityResponseType = HttpResponse<ITender>;
type EntityArrayResponseType = HttpResponse<ITender[]>;

@Injectable({ providedIn: 'root' })
export class TenderService {
  public resourceUrl = SERVER_API_URL + 'services/dataservice/api/tender';

  constructor(protected http: HttpClient) {}

  create(tender: ITender): Observable<EntityResponseType> {
    return this.http.post<ITender>(this.resourceUrl, tender, { observe: 'response' });
  }

  update(tender: ITender): Observable<EntityResponseType> {
    return this.http.put<ITender>(this.resourceUrl, tender, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITender>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITender[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
