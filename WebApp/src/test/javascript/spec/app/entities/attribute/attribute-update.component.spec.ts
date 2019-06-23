/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { AttributeUpdateComponent } from 'app/entities/attribute/attribute-update.component';
import { AttributeService } from 'app/entities/attribute/attribute.service';
import { Attribute } from 'app/shared/model/attribute.model';

describe('Component Tests', () => {
  describe('Attribute Management Update Component', () => {
    let comp: AttributeUpdateComponent;
    let fixture: ComponentFixture<AttributeUpdateComponent>;
    let service: AttributeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [AttributeUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(AttributeUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AttributeUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AttributeService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Attribute(123);
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
        const entity = new Attribute();
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
