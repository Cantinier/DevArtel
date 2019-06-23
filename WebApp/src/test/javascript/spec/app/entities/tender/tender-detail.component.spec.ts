/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { TenderDetailComponent } from 'app/entities/tender/tender-detail.component';
import { Tender } from 'app/shared/model/tender.model';

describe('Component Tests', () => {
  describe('Tender Management Detail Component', () => {
    let comp: TenderDetailComponent;
    let fixture: ComponentFixture<TenderDetailComponent>;
    const route = ({ data: of({ tender: new Tender(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TenderDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(TenderDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TenderDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.tender).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
