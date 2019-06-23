import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Tenderspec } from 'app/shared/model/tenderspec.model';
import { TenderspecService } from './tenderspec.service';
import { TenderspecComponent } from './tenderspec.component';
import { TenderspecDetailComponent } from './tenderspec-detail.component';
import { TenderspecUpdateComponent } from './tenderspec-update.component';
import { TenderspecDeletePopupComponent } from './tenderspec-delete-dialog.component';
import { ITenderspec } from 'app/shared/model/tenderspec.model';

@Injectable({ providedIn: 'root' })
export class TenderspecResolve implements Resolve<ITenderspec> {
  constructor(private service: TenderspecService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITenderspec> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Tenderspec>) => response.ok),
        map((tenderspec: HttpResponse<Tenderspec>) => tenderspec.body)
      );
    }
    return of(new Tenderspec());
  }
}

export const tenderspecRoute: Routes = [
  {
    path: '',
    component: TenderspecComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tenderspec.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: TenderspecDetailComponent,
    resolve: {
      tenderspec: TenderspecResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tenderspec.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: TenderspecUpdateComponent,
    resolve: {
      tenderspec: TenderspecResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tenderspec.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: TenderspecUpdateComponent,
    resolve: {
      tenderspec: TenderspecResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tenderspec.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const tenderspecPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: TenderspecDeletePopupComponent,
    resolve: {
      tenderspec: TenderspecResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tenderspec.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
