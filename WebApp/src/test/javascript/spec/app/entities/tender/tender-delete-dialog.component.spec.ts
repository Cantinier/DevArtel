/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { TenderControlTestModule } from '../../../test.module';
import { TenderDeleteDialogComponent } from 'app/entities/tender/tender-delete-dialog.component';
import { TenderService } from 'app/entities/tender/tender.service';

describe('Component Tests', () => {
  describe('Tender Management Delete Component', () => {
    let comp: TenderDeleteDialogComponent;
    let fixture: ComponentFixture<TenderDeleteDialogComponent>;
    let service: TenderService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TenderDeleteDialogComponent]
      })
        .overrideTemplate(TenderDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TenderDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TenderService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
