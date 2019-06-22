import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITypeofattribute } from 'app/shared/model/typeofattribute.model';
import { AccountService } from 'app/core';
import { TypeofattributeService } from './typeofattribute.service';

@Component({
  selector: 'jhi-typeofattribute',
  templateUrl: './typeofattribute.component.html'
})
export class TypeofattributeComponent implements OnInit, OnDestroy {
  typeofattributes: ITypeofattribute[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected typeofattributeService: TypeofattributeService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.typeofattributeService
      .query()
      .pipe(
        filter((res: HttpResponse<ITypeofattribute[]>) => res.ok),
        map((res: HttpResponse<ITypeofattribute[]>) => res.body)
      )
      .subscribe(
        (res: ITypeofattribute[]) => {
          this.typeofattributes = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInTypeofattributes();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ITypeofattribute) {
    return item.id;
  }

  registerChangeInTypeofattributes() {
    this.eventSubscriber = this.eventManager.subscribe('typeofattributeListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
