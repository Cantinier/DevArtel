import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'employers',
        loadChildren: './employers/employers.module#TenderControlEmployersModule'
      },
      {
        path: 'typeofattribute',
        loadChildren: './typeofattribute/typeofattribute.module#TenderControlTypeofattributeModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenderControlEntityModule {}
