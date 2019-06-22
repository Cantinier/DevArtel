import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { TenderControlSharedModule } from 'app/shared';
import {
  EmployersComponent,
  EmployersDetailComponent,
  EmployersUpdateComponent,
  EmployersDeletePopupComponent,
  EmployersDeleteDialogComponent,
  employersRoute,
  employersPopupRoute
} from './';

const ENTITY_STATES = [...employersRoute, ...employersPopupRoute];

@NgModule({
  imports: [TenderControlSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EmployersComponent,
    EmployersDetailComponent,
    EmployersUpdateComponent,
    EmployersDeleteDialogComponent,
    EmployersDeletePopupComponent
  ],
  entryComponents: [EmployersComponent, EmployersUpdateComponent, EmployersDeleteDialogComponent, EmployersDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenderControlEmployersModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
