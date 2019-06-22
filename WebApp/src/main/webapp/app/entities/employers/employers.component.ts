import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IEmployers } from 'app/shared/model/employers.model';
import { AccountService } from 'app/core';
import { EmployersService } from './employers.service';

@Component({
  selector: 'jhi-employers',
  templateUrl: './employers.component.html'
})
export class EmployersComponent implements OnInit, OnDestroy {
  employers: IEmployers[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected employersService: EmployersService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.employersService
      .query()
      .pipe(
        filter((res: HttpResponse<IEmployers[]>) => res.ok),
        map((res: HttpResponse<IEmployers[]>) => res.body)
      )
      .subscribe(
        (res: IEmployers[]) => {
          this.employers = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInEmployers();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IEmployers) {
    return item.id;
  }

  registerChangeInEmployers() {
    this.eventSubscriber = this.eventManager.subscribe('employersListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
