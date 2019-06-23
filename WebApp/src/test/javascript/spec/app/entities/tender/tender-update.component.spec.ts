/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { TenderUpdateComponent } from 'app/entities/tender/tender-update.component';
import { TenderService } from 'app/entities/tender/tender.service';
import { Tender } from 'app/shared/model/tender.model';

describe('Component Tests', () => {
  describe('Tender Management Update Component', () => {
    let comp: TenderUpdateComponent;
    let fixture: ComponentFixture<TenderUpdateComponent>;
    let service: TenderService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TenderUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(TenderUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TenderUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TenderService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Tender(123);
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
        const entity = new Tender();
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
