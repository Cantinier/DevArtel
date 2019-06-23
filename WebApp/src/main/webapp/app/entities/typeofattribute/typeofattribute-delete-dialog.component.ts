import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITypeofattribute } from 'app/shared/model/typeofattribute.model';
import { TypeofattributeService } from './typeofattribute.service';

@Component({
  selector: 'jhi-typeofattribute-delete-dialog',
  templateUrl: './typeofattribute-delete-dialog.component.html'
})
export class TypeofattributeDeleteDialogComponent {
  typeofattribute: ITypeofattribute;

  constructor(
    protected typeofattributeService: TypeofattributeService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.typeofattributeService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'typeofattributeListModification',
        content: 'Deleted an typeofattribute'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-typeofattribute-delete-popup',
  template: ''
})
export class TypeofattributeDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ typeofattribute }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(TypeofattributeDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.typeofattribute = typeofattribute;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/typeofattribute', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/typeofattribute', { outlets: { popup: null } }]);
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
