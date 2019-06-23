/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TenderControlTestModule } from '../../../test.module';
import { AttributeComponent } from 'app/entities/attribute/attribute.component';
import { AttributeService } from 'app/entities/attribute/attribute.service';
import { Attribute } from 'app/shared/model/attribute.model';

describe('Component Tests', () => {
  describe('Attribute Management Component', () => {
    let comp: AttributeComponent;
    let fixture: ComponentFixture<AttributeComponent>;
    let service: AttributeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [AttributeComponent],
        providers: []
      })
        .overrideTemplate(AttributeComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AttributeComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AttributeService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Attribute(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.attributes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
