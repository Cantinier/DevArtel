/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { TenderControlTestModule } from '../../../test.module';
import { TenderspecDeleteDialogComponent } from 'app/entities/tenderspec/tenderspec-delete-dialog.component';
import { TenderspecService } from 'app/entities/tenderspec/tenderspec.service';

describe('Component Tests', () => {
  describe('Tenderspec Management Delete Component', () => {
    let comp: TenderspecDeleteDialogComponent;
    let fixture: ComponentFixture<TenderspecDeleteDialogComponent>;
    let service: TenderspecService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TenderspecDeleteDialogComponent]
      })
        .overrideTemplate(TenderspecDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TenderspecDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TenderspecService);
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
