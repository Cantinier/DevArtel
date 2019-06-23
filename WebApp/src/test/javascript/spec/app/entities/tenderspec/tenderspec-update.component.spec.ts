/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { TenderspecUpdateComponent } from 'app/entities/tenderspec/tenderspec-update.component';
import { TenderspecService } from 'app/entities/tenderspec/tenderspec.service';
import { Tenderspec } from 'app/shared/model/tenderspec.model';

describe('Component Tests', () => {
  describe('Tenderspec Management Update Component', () => {
    let comp: TenderspecUpdateComponent;
    let fixture: ComponentFixture<TenderspecUpdateComponent>;
    let service: TenderspecService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TenderspecUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(TenderspecUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TenderspecUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TenderspecService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Tenderspec(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Tenderspec();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
