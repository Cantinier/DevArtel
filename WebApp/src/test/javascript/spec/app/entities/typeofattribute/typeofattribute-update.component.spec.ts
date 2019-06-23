/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { TypeofattributeUpdateComponent } from 'app/entities/typeofattribute/typeofattribute-update.component';
import { TypeofattributeService } from 'app/entities/typeofattribute/typeofattribute.service';
import { Typeofattribute } from 'app/shared/model/typeofattribute.model';

describe('Component Tests', () => {
  describe('Typeofattribute Management Update Component', () => {
    let comp: TypeofattributeUpdateComponent;
    let fixture: ComponentFixture<TypeofattributeUpdateComponent>;
    let service: TypeofattributeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TypeofattributeUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(TypeofattributeUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TypeofattributeUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TypeofattributeService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Typeofattribute(123);
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
        const entity = new Typeofattribute();
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
