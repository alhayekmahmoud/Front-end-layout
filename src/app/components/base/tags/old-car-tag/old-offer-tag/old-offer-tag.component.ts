import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-old-offer-tag',
  templateUrl: './old-offer-tag.component.html',
  styleUrls: ['./old-offer-tag.component.scss'],
})
export class OldOfferTagComponent  implements OnInit {
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
