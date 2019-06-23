import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITender } from 'app/shared/model/tender.model';
import { AccountService } from 'app/core';
import { TenderService } from './tender.service';

@Component({
  selector: 'jhi-tender',
  templateUrl: './tender.component.html'
})
export class TenderComponent implements OnInit, OnDestroy {
  tenders: ITender[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected tenderService: TenderService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.tenderService
      .query()
      .pipe(
        filter((res: HttpResponse<ITender[]>) => res.ok),
        map((res: HttpResponse<ITender[]>) => res.body)
      )
      .subscribe(
        (res: ITender[]) => {
          this.tenders = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInTenders();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ITender) {
    return item.id;
  }

  registerChangeInTenders() {
    this.eventSubscriber = this.eventManager.subscribe('tenderListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
