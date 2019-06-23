import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Tender } from 'app/shared/model/tender.model';
import { TenderService } from './tender.service';
import { TenderComponent } from './tender.component';
import { TenderDetailComponent } from './tender-detail.component';
import { TenderUpdateComponent } from './tender-update.component';
import { TenderDeletePopupComponent } from './tender-delete-dialog.component';
import { ITender } from 'app/shared/model/tender.model';

@Injectable({ providedIn: 'root' })
export class TenderResolve implements Resolve<ITender> {
  constructor(private service: TenderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITender> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Tender>) => response.ok),
        map((tender: HttpResponse<Tender>) => tender.body)
      );
    }
    return of(new Tender());
  }
}

export const tenderRoute: Routes = [
  {
    path: '',
    component: TenderComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tender.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: TenderDetailComponent,
    resolve: {
      tender: TenderResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tender.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: TenderUpdateComponent,
    resolve: {
      tender: TenderResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tender.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: TenderUpdateComponent,
    resolve: {
      tender: TenderResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tender.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const tenderPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: TenderDeletePopupComponent,
    resolve: {
      tender: TenderResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.tender.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
