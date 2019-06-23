import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITender } from 'app/shared/model/tender.model';
import { TenderService } from './tender.service';

@Component({
  selector: 'jhi-tender-delete-dialog',
  templateUrl: './tender-delete-dialog.component.html'
})
export class TenderDeleteDialogComponent {
  tender: ITender;

  constructor(protected tenderService: TenderService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.tenderService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'tenderListModification',
        content: 'Deleted an tender'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-tender-delete-popup',
  template: ''
})
export class TenderDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ tender }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(TenderDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.tender = tender;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/tender', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/tender', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
