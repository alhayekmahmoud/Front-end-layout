import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'mfc-brand-tag',
  templateUrl: './brand-tag.component.html',
  styleUrls: ['./brand-tag.component.scss'],
})
export class BrandTagComponent  implements OnInit {

  brands: any[]=[

    {id:1, img:'assets/images/home/Brands/l1.png'},
    {id:2, img:'assets/images/home/Brands/l2.png'},
    {id:3, img:'assets/images/home/Brands/l3.png'},
    {id:4, img:'assets/images/home/Brands/l4.png'},
    {id:5, img:'assets/images/home/Brands/l5.png'},
    {id:6, img:'assets/images/home/Brands/l6.png'},
    {id:7, img:'assets/images/home/Brands/l7.png'},
    {id:8, img:'assets/images/home/Brands/l8.jpg'},
    {id:9, img:'assets/images/home/Brands/l9.jpg'},
    {id:10, img:'assets/images/home/Brands/l10.jpg'}
  ]

  constructor() { }

  ngOnInit() {}

}
