/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TenderControlTestModule } from '../../../test.module';
import { TenderComponent } from 'app/entities/tender/tender.component';
import { TenderService } from 'app/entities/tender/tender.service';
import { Tender } from 'app/shared/model/tender.model';

describe('Component Tests', () => {
  describe('Tender Management Component', () => {
    let comp: TenderComponent;
    let fixture: ComponentFixture<TenderComponent>;
    let service: TenderService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TenderComponent],
        providers: []
      })
        .overrideTemplate(TenderComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TenderComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TenderService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Tender(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.tenders[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
