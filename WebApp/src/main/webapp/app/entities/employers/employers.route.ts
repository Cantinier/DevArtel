import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Employers } from 'app/shared/model/employers.model';
import { EmployersService } from './employers.service';
import { EmployersComponent } from './employers.component';
import { EmployersDetailComponent } from './employers-detail.component';
import { EmployersUpdateComponent } from './employers-update.component';
import { EmployersDeletePopupComponent } from './employers-delete-dialog.component';
import { IEmployers } from 'app/shared/model/employers.model';

@Injectable({ providedIn: 'root' })
export class EmployersResolve implements Resolve<IEmployers> {
  constructor(private service: EmployersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmployers> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Employers>) => response.ok),
        map((employers: HttpResponse<Employers>) => employers.body)
      );
    }
    return of(new Employers());
  }
}

export const employersRoute: Routes = [
  {
    path: '',
    component: EmployersComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.employers.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: EmployersDetailComponent,
    resolve: {
      employers: EmployersResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.employers.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: EmployersUpdateComponent,
    resolve: {
      employers: EmployersResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.employers.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: EmployersUpdateComponent,
    resolve: {
      employers: EmployersResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.employers.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const employersPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: EmployersDeletePopupComponent,
    resolve: {
      employers: EmployersResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'tenderControlApp.employers.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
