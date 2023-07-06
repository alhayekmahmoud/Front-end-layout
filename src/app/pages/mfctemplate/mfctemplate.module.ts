import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MfctemplatePageRoutingModule } from './mfctemplate-routing.module';

import { MfctemplatePage } from './mfctemplate.page';
import { ComponentSharedModule } from 'src/app/components/component-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MfctemplatePageRoutingModule,
    ComponentSharedModule
  ],
  declarations: [MfctemplatePage]
})
export class MfctemplatePageModule {}
