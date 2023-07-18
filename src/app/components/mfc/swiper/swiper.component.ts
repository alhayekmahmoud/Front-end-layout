import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mfc-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  slides= [
    {id:1, image:'../../../../assets/images/mfc/slide/1.jpg'},
    {id:1, image:'../../../../assets/images/mfc/slide/1.jpg'},
    {id:1, image:'../../../../assets/images/mfc/slide/1.jpg'},
  ]

}
