import { PopoversComponent } from './mfc/popovers/popovers.component';
import { CheckboxesComponent } from './mfc/checkboxes/checkboxes.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonSearchbar, IonicModule } from '@ionic/angular';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TranslocoRootModule} from 'src/app/transloco-root.module'
import { LoginCardComponent } from './base/cards/login-card/login-card.component';
import { PopoverMenuComponent } from './base/popover-menu/popover-menu.component';
import { HomeNewCarComponent } from './base/home-new-car/home-new-car.component';
import { HomeOldCarComponent } from './base/home-old-car/home-old-car.component';
import { HomeSellCarComponent } from './base/home-sell-car/home-sell-car.component';

import { register } from 'swiper/element/bundle';

import { RouterModule } from '@angular/router';
import { ActionSheetComponent } from './mfc/action-sheet/action-sheet.component';
import { AccordionComponent } from './mfc/accordion/accordion.component';
import { AlertComponent } from './mfc/alert/alert.component';
import { BadgeComponent } from './mfc/badge/badge.component';
import { BreadcrumbComponent } from './mfc/breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './mfc/buttons/buttons.component';
import { CardComponent } from './mfc/card/card.component';
import { MenuComponent } from './mfc/menu/menu.component';
import { DateTimeComponent } from './mfc/date-time/date-time.component';
import { FloatingActionButtonComponent } from './mfc/floating-action-button/floating-action-button.component';
import { InfiniteScrollComponent } from './mfc/infinite-scroll/infinite-scroll.component';
import { ItemsComponent } from './mfc/items/items.component';
import { AvaterComponent } from './mfc/media/avater/avater.component';
import { ProgressIndicatorsComponent } from './mfc/progress-indicators/progress-indicators.component';
import { RadioComponent } from './mfc/radio/radio.component';
import { RangeComponent } from './mfc/range/range.component';
import { SerchBarComponent } from './mfc/serch-bar/serch-bar.component';
import { ToastComponent } from './mfc/toast/toast.component';
import { ToggleComponent } from './mfc/toggle/toggle.component';

import { NewLunchedComponent } from './taga/new-lunched/new-lunched.component';
import { BrandTagComponent } from './taga/brand-tag/brand-tag.component';
import { OfferTagComponent } from './taga/offer-tag/offer-tag.component';
import { TopCarTagComponent } from './taga/top-car-tag/top-car-tag.component';
import { ExpertReviewTagComponent } from './taga/expert-review-tag/expert-review-tag.component';
import { SwiperComponent } from './mfc/swiper/swiper.component';
import { CarListComponent } from './base/car-list/car-list.component';
import { Card1HeaderComponent } from './base/cards/report-cards/header-cards/card1-header/card1-header.component';
import { Card2HeaderComponent } from './base/cards/report-cards/header-cards/card2-header/card2-header.component';
import { Card3HeaderComponent } from './base/cards/report-cards/header-cards/card3-header/card3-header.component';
import { Card4HeaderComponent } from './base/cards/report-cards/header-cards/card4-header/card4-header.component';
import { Card1ChartComponent } from './base/cards/report-cards/chart-cards/card1-chart/card1-chart.component';
import { Card2ChartComponent } from './base/cards/report-cards/chart-cards/card2-chart/card2-chart.component';
import { Card1TableComponent } from './base/cards/report-cards/table-cards/card1-table/card1-table.component';
import { Card2TableComponent } from './base/cards/report-cards/table-cards/card2-table/card2-table.component';
import { MapCardComponent } from './base/cards/report-cards/map-card/map-card.component';

register();

@NgModule({
  declarations: [
    LoginCardComponent,
    PopoverMenuComponent,
    HomeNewCarComponent,
    HomeOldCarComponent,
    HomeSellCarComponent,
    CarListComponent,


    // import tage components
    BrandTagComponent,
    ExpertReviewTagComponent,
    NewLunchedComponent,
    OfferTagComponent,
    TopCarTagComponent,

    // import mfc component
    ActionSheetComponent,
    AccordionComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    CardComponent,
    MenuComponent,
    CheckboxesComponent,
    DateTimeComponent,
    FloatingActionButtonComponent,
    InfiniteScrollComponent,
    ItemsComponent,
    AvaterComponent,
    PopoversComponent,
    ProgressIndicatorsComponent,
    RadioComponent,
    RangeComponent,
    SerchBarComponent,
    ToastComponent,
    ToggleComponent,
    SwiperComponent,

    Card1HeaderComponent,
    Card2HeaderComponent,
    Card3HeaderComponent,
    Card4HeaderComponent,

    Card1ChartComponent,
    Card2ChartComponent,

    Card1TableComponent,
    Card2TableComponent,

    MapCardComponent

  ],
  imports: [
    CommonModule,
     IonicModule,
     TranslocoRootModule,
     RouterModule
    ],
  exports: [
    LoginCardComponent,
    TranslocoRootModule,
    PopoverMenuComponent,
    HomeNewCarComponent,
    HomeOldCarComponent,
    HomeSellCarComponent,
    CarListComponent,



    // export tags component
    BrandTagComponent,
    ExpertReviewTagComponent,
    NewLunchedComponent,
    OfferTagComponent,
    TopCarTagComponent,

    //export mfc components
    ActionSheetComponent,
    AccordionComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    CardComponent,
    MenuComponent,
    CheckboxesComponent,
    DateTimeComponent,
    FloatingActionButtonComponent,
    InfiniteScrollComponent,
    ItemsComponent,
    AvaterComponent,
    PopoversComponent,
    ProgressIndicatorsComponent,
    RadioComponent,
    RangeComponent,
    SerchBarComponent,
    ToastComponent,
    ToggleComponent,
    SwiperComponent,

    Card1HeaderComponent,
    Card2HeaderComponent,
    Card3HeaderComponent,
    Card4HeaderComponent,

    Card1ChartComponent,
    Card2ChartComponent,

    Card1TableComponent,
    Card2TableComponent,

    MapCardComponent




  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentSharedModule {}
