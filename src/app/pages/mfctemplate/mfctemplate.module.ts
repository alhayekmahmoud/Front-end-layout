import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MfctemplatePageRoutingModule } from './mfctemplate-routing.module';

import { MfctemplatePage } from './mfctemplate.page';
import { ComponentSharedModule } from 'src/app/components/component-shared.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MfctemplatePageRoutingModule,
    ComponentSharedModule,
    SharedDirectivesModule
  ],
  declarations: [MfctemplatePage]
})
export class MfctemplatePageModule {}
