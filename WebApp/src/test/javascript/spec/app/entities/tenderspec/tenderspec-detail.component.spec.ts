/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { TenderspecDetailComponent } from 'app/entities/tenderspec/tenderspec-detail.component';
import { Tenderspec } from 'app/shared/model/tenderspec.model';

describe('Component Tests', () => {
  describe('Tenderspec Management Detail Component', () => {
    let comp: TenderspecDetailComponent;
    let fixture: ComponentFixture<TenderspecDetailComponent>;
    const route = ({ data: of({ tenderspec: new Tenderspec(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TenderspecDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(TenderspecDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TenderspecDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.tenderspec).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
