import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-old-brand-tag',
  templateUrl: './old-brand-tag.component.html',
  styleUrls: ['./old-brand-tag.component.scss'],
})
export class OldBrandTagComponent  implements OnInit {

  brands: any[]=[

    {id:1, img:'assets/images/home/Brands/l1.png'},
    {id:1, img:'assets/images/home/Brands/l2.png'},
    {id:1, img:'assets/images/home/Brands/l3.png'},
    {id:1, img:'assets/images/home/Brands/l4.png'},
    {id:1, img:'assets/images/home/Brands/l5.png'},
    {id:1, img:'assets/images/home/Brands/l6.png'},
    {id:1, img:'assets/images/home/Brands/l7.png'},
    {id:1, img:'assets/images/home/Brands/l8.jpg'},
    {id:1, img:'assets/images/home/Brands/l9.jpg'},
    {id:1, img:'assets/images/home/Brands/l10.jpg'}
  ]

  constructor() { }

  ngOnInit() {}

}


