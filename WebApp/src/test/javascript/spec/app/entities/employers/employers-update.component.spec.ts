/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { EmployersUpdateComponent } from 'app/entities/employers/employers-update.component';
import { EmployersService } from 'app/entities/employers/employers.service';
import { Employers } from 'app/shared/model/employers.model';

describe('Component Tests', () => {
  describe('Employers Management Update Component', () => {
    let comp: EmployersUpdateComponent;
    let fixture: ComponentFixture<EmployersUpdateComponent>;
    let service: EmployersService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [EmployersUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(EmployersUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(EmployersUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EmployersService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Employers(123);
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
        const entity = new Employers();
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
