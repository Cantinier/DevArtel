import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAttribute } from 'app/shared/model/attribute.model';

type EntityResponseType = HttpResponse<IAttribute>;
type EntityArrayResponseType = HttpResponse<IAttribute[]>;

@Injectable({ providedIn: 'root' })
export class AttributeService {
  public resourceUrl = SERVER_API_URL + 'services/dataservice/api/attribute';

  constructor(protected http: HttpClient) {}

  create(attribute: IAttribute): Observable<EntityResponseType> {
    return this.http.post<IAttribute>(this.resourceUrl, attribute, { observe: 'response' });
  }

  update(attribute: IAttribute): Observable<EntityResponseType> {
    return this.http.put<IAttribute>(this.resourceUrl, attribute, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAttribute>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAttribute[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
