/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { EmployersDetailComponent } from 'app/entities/employers/employers-detail.component';
import { Employers } from 'app/shared/model/employers.model';

describe('Component Tests', () => {
  describe('Employers Management Detail Component', () => {
    let comp: EmployersDetailComponent;
    let fixture: ComponentFixture<EmployersDetailComponent>;
    const route = ({ data: of({ employers: new Employers(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [EmployersDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(EmployersDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(EmployersDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.employers).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
