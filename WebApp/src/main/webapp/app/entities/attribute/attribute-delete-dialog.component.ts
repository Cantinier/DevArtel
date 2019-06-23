import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAttribute } from 'app/shared/model/attribute.model';
import { AttributeService } from './attribute.service';

@Component({
  selector: 'jhi-attribute-delete-dialog',
  templateUrl: './attribute-delete-dialog.component.html'
})
export class AttributeDeleteDialogComponent {
  attribute: IAttribute;

  constructor(protected attributeService: AttributeService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.attributeService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'attributeListModification',
        content: 'Deleted an attribute'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-attribute-delete-popup',
  template: ''
})
export class AttributeDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ attribute }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(AttributeDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.attribute = attribute;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/attribute', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/attribute', { outlets: { popup: null } }]);
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
