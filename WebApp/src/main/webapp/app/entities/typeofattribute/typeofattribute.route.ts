import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Typeofattribute } from 'app/shared/model/typeofattribute.model';
import { TypeofattributeService } from './typeofattribute.service';
import { TypeofattributeComponent } from './typeofattribute.component';
import { TypeofattributeDetailComponent } from './typeofattribute-detail.component';
import { TypeofattributeUpdateComponent } from './typeofattribute-update.component';
import { TypeofattributeDeletePopupComponent } from './typeofattribute-delete-dialog.component';
import { ITypeofattribute } from 'app/shared/model/typeofattribute.model';

@Injectable({ providedIn: 'root' })
export class TypeofattributeResolve implements Resolve<ITypeofattribute> {
  constructor(private service: TypeofattributeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITypeofattribute> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Typeofattribute>) => response.ok),
        map((typeofattribute: HttpResponse<Typeofattribute>) => typeofattribute.body)
      );
    }
    return of(new Typeofattribute());
  }
}

export const typeofattributeRoute: Routes = [
  {
    path: '',
    component: TypeofattributeComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.typeofattribute.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: TypeofattributeDetailComponent,
    resolve: {
      typeofattribute: TypeofattributeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.typeofattribute.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: TypeofattributeUpdateComponent,
    resolve: {
      typeofattribute: TypeofattributeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.typeofattribute.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: TypeofattributeUpdateComponent,
    resolve: {
      typeofattribute: TypeofattributeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.typeofattribute.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const typeofattributePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: TypeofattributeDeletePopupComponent,
    resolve: {
      typeofattribute: TypeofattributeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.typeofattribute.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
