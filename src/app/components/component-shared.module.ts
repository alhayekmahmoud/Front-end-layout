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

import { NewCarsListComponent } from './base/new-cars-list/new-cars-list.component';
import { OldCarsListComponent } from './base/old-cars-list/old-cars-list.component';

import { NewLunchedComponent } from './taga/new-lunched/new-lunched.component';
import { BrandTagComponent } from './taga/brand-tag/brand-tag.component';
import { OfferTagComponent } from './taga/offer-tag/offer-tag.component';
import { TopCarTagComponent } from './taga/top-car-tag/top-car-tag.component';
import { ExpertReviewTagComponent } from './taga/expert-review-tag/expert-review-tag.component';
import { SwiperComponent } from './mfc/swiper/swiper.component';
import { CarListComponent } from './base/car-list/car-list.component';

register();

@NgModule({
  declarations: [
    LoginCardComponent,
    PopoverMenuComponent,
    HomeNewCarComponent,
    HomeOldCarComponent,
    HomeSellCarComponent,
    NewCarsListComponent,
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
    OldCarsListComponent,
    SwiperComponent

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
    NewCarsListComponent,
    OldCarsListComponent,
    SwiperComponent


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentSharedModule {}
