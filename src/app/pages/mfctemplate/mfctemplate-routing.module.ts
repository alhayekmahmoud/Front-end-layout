import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MfctemplatePage } from './mfctemplate.page';

const routes: Routes = [
  {
    path: '',
    component: MfctemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfctemplatePageRoutingModule {}
