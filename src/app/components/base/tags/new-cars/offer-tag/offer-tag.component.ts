import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-offer-tag',
  templateUrl: './offer-tag.component.html',
  styleUrls: ['./offer-tag.component.scss'],
})
export class OfferTagComponent  implements OnInit {


  bestOffers: any[]=[

    {id:1, img:'assets/images/home/bestOffer/o1.jpg'},
    {id:1, img:'assets/images/home/bestOffer/o2.jpg'},
    {id:1, img:'assets/images/home/bestOffer/o4.jpg'},
    {id:1, img:'assets/images/home/bestOffer/o5.jpg'},
    {id:1, img:'assets/images/home/bestOffer/o6.jpg'},


  ]

  constructor() { }

  ngOnInit() {}

}
