/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TenderControlTestModule } from '../../../test.module';
import { TenderspecComponent } from 'app/entities/tenderspec/tenderspec.component';
import { TenderspecService } from 'app/entities/tenderspec/tenderspec.service';
import { Tenderspec } from 'app/shared/model/tenderspec.model';

describe('Component Tests', () => {
  describe('Tenderspec Management Component', () => {
    let comp: TenderspecComponent;
    let fixture: ComponentFixture<TenderspecComponent>;
    let service: TenderspecService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TenderspecComponent],
        providers: []
      })
        .overrideTemplate(TenderspecComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TenderspecComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TenderspecService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Tenderspec(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.tenderspecs[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
