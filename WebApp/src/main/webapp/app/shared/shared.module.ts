import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TenderControlSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TenderControlSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TenderControlSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenderControlSharedModule {
  static forRoot() {
    return {
      ngModule: TenderControlSharedModule
    };
  }
}
