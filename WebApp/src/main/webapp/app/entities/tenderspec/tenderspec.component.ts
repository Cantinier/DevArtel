import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITenderspec } from 'app/shared/model/tenderspec.model';
import { AccountService } from 'app/core';
import { TenderspecService } from './tenderspec.service';

@Component({
  selector: 'jhi-tenderspec',
  templateUrl: './tenderspec.component.html'
})
export class TenderspecComponent implements OnInit, OnDestroy {
  tenderspecs: ITenderspec[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected tenderspecService: TenderspecService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.tenderspecService
      .query()
      .pipe(
        filter((res: HttpResponse<ITenderspec[]>) => res.ok),
        map((res: HttpResponse<ITenderspec[]>) => res.body)
      )
      .subscribe(
        (res: ITenderspec[]) => {
          this.tenderspecs = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInTenderspecs();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ITenderspec) {
    return item.id;
  }

  registerChangeInTenderspecs() {
    this.eventSubscriber = this.eventManager.subscribe('tenderspecListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
