/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { TenderControlTestModule } from '../../../test.module';
import { TypeofattributeDeleteDialogComponent } from 'app/entities/typeofattribute/typeofattribute-delete-dialog.component';
import { TypeofattributeService } from 'app/entities/typeofattribute/typeofattribute.service';

describe('Component Tests', () => {
  describe('Typeofattribute Management Delete Component', () => {
    let comp: TypeofattributeDeleteDialogComponent;
    let fixture: ComponentFixture<TypeofattributeDeleteDialogComponent>;
    let service: TypeofattributeService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TypeofattributeDeleteDialogComponent]
      })
        .overrideTemplate(TypeofattributeDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TypeofattributeDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TypeofattributeService);
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
