/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TenderControlTestModule } from '../../../test.module';
import { EmployersComponent } from 'app/entities/employers/employers.component';
import { EmployersService } from 'app/entities/employers/employers.service';
import { Employers } from 'app/shared/model/employers.model';

describe('Component Tests', () => {
  describe('Employers Management Component', () => {
    let comp: EmployersComponent;
    let fixture: ComponentFixture<EmployersComponent>;
    let service: EmployersService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [EmployersComponent],
        providers: []
      })
        .overrideTemplate(EmployersComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(EmployersComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EmployersService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Employers(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.employers[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
