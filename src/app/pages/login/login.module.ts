import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentSharedModule } from 'src/app/components/component-shared.module';
import { TranslocoRootModule } from 'src/app/transloco-root.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ComponentSharedModule,
    TranslocoRootModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
