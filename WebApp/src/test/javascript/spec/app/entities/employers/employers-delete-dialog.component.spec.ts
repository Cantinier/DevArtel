/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { TenderControlTestModule } from '../../../test.module';
import { EmployersDeleteDialogComponent } from 'app/entities/employers/employers-delete-dialog.component';
import { EmployersService } from 'app/entities/employers/employers.service';

describe('Component Tests', () => {
  describe('Employers Management Delete Component', () => {
    let comp: EmployersDeleteDialogComponent;
    let fixture: ComponentFixture<EmployersDeleteDialogComponent>;
    let service: EmployersService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [EmployersDeleteDialogComponent]
      })
        .overrideTemplate(EmployersDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(EmployersDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EmployersService);
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
