import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { TenderControlSharedModule } from 'app/shared';
import {
  TypeofattributeComponent,
  TypeofattributeDetailComponent,
  TypeofattributeUpdateComponent,
  TypeofattributeDeletePopupComponent,
  TypeofattributeDeleteDialogComponent,
  typeofattributeRoute,
  typeofattributePopupRoute
} from './';

const ENTITY_STATES = [...typeofattributeRoute, ...typeofattributePopupRoute];

@NgModule({
  imports: [TenderControlSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TypeofattributeComponent,
    TypeofattributeDetailComponent,
    TypeofattributeUpdateComponent,
    TypeofattributeDeleteDialogComponent,
    TypeofattributeDeletePopupComponent
  ],
  entryComponents: [
    TypeofattributeComponent,
    TypeofattributeUpdateComponent,
    TypeofattributeDeleteDialogComponent,
    TypeofattributeDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenderControlTypeofattributeModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
