import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TranslocoRootModule} from 'src/app/transloco-root.module'
import { LoginCardComponent } from './base/cards/login-card/login-card.component';
import { PopoverMenuComponent } from './base/popover-menu/popover-menu.component';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [
    LoginCardComponent,
    PopoverMenuComponent
  ],
  imports: [
    CommonModule,
     IonicModule,
     TranslocoRootModule
    ],
  exports: [
    LoginCardComponent,
    TranslocoRootModule,
    PopoverMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentSharedModule {}
