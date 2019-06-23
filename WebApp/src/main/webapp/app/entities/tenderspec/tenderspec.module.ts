import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { TenderControlSharedModule } from 'app/shared';
import {
  TenderspecComponent,
  TenderspecDetailComponent,
  TenderspecUpdateComponent,
  TenderspecDeletePopupComponent,
  TenderspecDeleteDialogComponent,
  tenderspecRoute,
  tenderspecPopupRoute
} from './';

const ENTITY_STATES = [...tenderspecRoute, ...tenderspecPopupRoute];

@NgModule({
  imports: [TenderControlSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TenderspecComponent,
    TenderspecDetailComponent,
    TenderspecUpdateComponent,
    TenderspecDeleteDialogComponent,
    TenderspecDeletePopupComponent
  ],
  entryComponents: [TenderspecComponent, TenderspecUpdateComponent, TenderspecDeleteDialogComponent, TenderspecDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenderControlTenderspecModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
