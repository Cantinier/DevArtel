import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Attribute } from 'app/shared/model/attribute.model';
import { AttributeService } from './attribute.service';
import { AttributeComponent } from './attribute.component';
import { AttributeDetailComponent } from './attribute-detail.component';
import { AttributeUpdateComponent } from './attribute-update.component';
import { AttributeDeletePopupComponent } from './attribute-delete-dialog.component';
import { IAttribute } from 'app/shared/model/attribute.model';

@Injectable({ providedIn: 'root' })
export class AttributeResolve implements Resolve<IAttribute> {
  constructor(private service: AttributeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAttribute> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Attribute>) => response.ok),
        map((attribute: HttpResponse<Attribute>) => attribute.body)
      );
    }
    return of(new Attribute());
  }
}

export const attributeRoute: Routes = [
  {
    path: '',
    component: AttributeComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.attribute.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: AttributeDetailComponent,
    resolve: {
      attribute: AttributeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.attribute.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: AttributeUpdateComponent,
    resolve: {
      attribute: AttributeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.attribute.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: AttributeUpdateComponent,
    resolve: {
      attribute: AttributeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.attribute.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const attributePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: AttributeDeletePopupComponent,
    resolve: {
      attribute: AttributeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.attribute.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
