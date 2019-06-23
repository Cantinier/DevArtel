/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TenderControlTestModule } from '../../../test.module';
import { TypeofattributeComponent } from 'app/entities/typeofattribute/typeofattribute.component';
import { TypeofattributeService } from 'app/entities/typeofattribute/typeofattribute.service';
import { Typeofattribute } from 'app/shared/model/typeofattribute.model';

describe('Component Tests', () => {
  describe('Typeofattribute Management Component', () => {
    let comp: TypeofattributeComponent;
    let fixture: ComponentFixture<TypeofattributeComponent>;
    let service: TypeofattributeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TypeofattributeComponent],
        providers: []
      })
        .overrideTemplate(TypeofattributeComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TypeofattributeComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TypeofattributeService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Typeofattribute(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.typeofattributes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
