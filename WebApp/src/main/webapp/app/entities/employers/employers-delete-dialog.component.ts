import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IEmployers } from 'app/shared/model/employers.model';
import { EmployersService } from './employers.service';

@Component({
  selector: 'jhi-employers-delete-dialog',
  templateUrl: './employers-delete-dialog.component.html'
})
export class EmployersDeleteDialogComponent {
  employers: IEmployers;

  constructor(protected employersService: EmployersService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.employersService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'employersListModification',
        content: 'Deleted an employers'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-employers-delete-popup',
  template: ''
})
export class EmployersDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ employers }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(EmployersDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.employers = employers;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/employers', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/employers', { outlets: { popup: null } }]);
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
