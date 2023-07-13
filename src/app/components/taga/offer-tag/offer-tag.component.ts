import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'mfc-offer-tag',
  templateUrl: './offer-tag.component.html',
  styleUrls: ['./offer-tag.component.scss'],
})
export class OfferTagComponent  implements OnInit {
  @Input()  activeSegment!:any;

  bestOffers: any[]=[]


  constructor(private dataservice: DataService) {
    this.bestOffers = this.dataservice.getBestOffers();
   }

  ngOnInit() {}

}
