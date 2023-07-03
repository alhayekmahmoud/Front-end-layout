import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TranslocoRootModule} from 'src/app/transloco-root.module'
import { LoginCardComponent } from './base/cards/login-card/login-card.component';
import { PopoverMenuComponent } from './base/popover-menu/popover-menu.component';
import { HomeNewCarComponent } from './base/home-new-car/home-new-car.component';
import { HomeOldCarComponent } from './base/home-old-car/home-old-car.component';
import { HomeSellCarComponent } from './base/home-sell-car/home-sell-car.component';

import { register } from 'swiper/element/bundle';
import { NewCarTagComponent } from './base/tags/new-cars/new-car-tag/new-car-tag.component';
import { OldCarTagComponent } from './base/tags/old-car-tag/old-car-tag.component';
import { SellCarTagComponent } from './base/tags/sell-car-tag/sell-car-tag.component';
import { TopCarTagComponent } from './base/tags/new-cars/top-car-tag/top-car-tag.component';
import { ExpertReviewTagComponent } from './base/tags/new-cars/expert-review-tag/expert-review-tag.component';
import { BrandTagComponent } from './base/tags/new-cars/brand-tag/brand-tag.component';
import { OfferTagComponent } from './base/tags/new-cars/offer-tag/offer-tag.component';

import { OldBrandTagComponent } from './base/tags/old-car-tag/old-brand-tag/old-brand-tag.component';
import { NewLunchedCarComponent } from './base/tags/old-car-tag/new-lunched-car/new-lunched-car.component';
import { OldExpertReviewTagComponent } from './base/tags/old-car-tag/old-expert-review-tag/old-expert-review-tag.component';
import { OldOfferTagComponent } from './base/tags/old-car-tag/old-offer-tag/old-offer-tag.component';
import { OldTopCareTagComponent } from './base/tags/old-car-tag/old-top-care-tag/old-top-care-tag.component';

register();

@NgModule({
  declarations: [
    LoginCardComponent,
    PopoverMenuComponent,
    HomeNewCarComponent,
    HomeOldCarComponent,
    HomeSellCarComponent,
    NewCarTagComponent,
    OldCarTagComponent,
    SellCarTagComponent,
    TopCarTagComponent,
    ExpertReviewTagComponent,
    BrandTagComponent,
    OfferTagComponent,
    OldBrandTagComponent,
    NewLunchedCarComponent,
    OldExpertReviewTagComponent,
    OldOfferTagComponent,
    OldTopCareTagComponent

  ],
  imports: [
    CommonModule,
     IonicModule,
     TranslocoRootModule
    ],
  exports: [
    LoginCardComponent,
    TranslocoRootModule,
    PopoverMenuComponent,
    HomeNewCarComponent,
    HomeOldCarComponent,
    HomeSellCarComponent,
    NewCarTagComponent,
    OldCarTagComponent,
    SellCarTagComponent,
    TopCarTagComponent,
    ExpertReviewTagComponent,
    BrandTagComponent,
    OfferTagComponent,
    OldBrandTagComponent,
    NewLunchedCarComponent,
    OldExpertReviewTagComponent,
    OldOfferTagComponent,
    OldTopCareTagComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentSharedModule {}
