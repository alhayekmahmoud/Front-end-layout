import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';

import { ReportPage } from './report.page';
import { ComponentSharedModule } from "../../components/component-shared.module";

@NgModule({
    declarations: [ReportPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReportPageRoutingModule,
        ComponentSharedModule
    ]
})
export class ReportPageModule {}
