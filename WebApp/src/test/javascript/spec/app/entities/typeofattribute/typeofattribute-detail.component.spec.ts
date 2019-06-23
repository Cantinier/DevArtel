/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TenderControlTestModule } from '../../../test.module';
import { TypeofattributeDetailComponent } from 'app/entities/typeofattribute/typeofattribute-detail.component';
import { Typeofattribute } from 'app/shared/model/typeofattribute.model';

describe('Component Tests', () => {
  describe('Typeofattribute Management Detail Component', () => {
    let comp: TypeofattributeDetailComponent;
    let fixture: ComponentFixture<TypeofattributeDetailComponent>;
    const route = ({ data: of({ typeofattribute: new Typeofattribute(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TenderControlTestModule],
        declarations: [TypeofattributeDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(TypeofattributeDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TypeofattributeDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.typeofattribute).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
