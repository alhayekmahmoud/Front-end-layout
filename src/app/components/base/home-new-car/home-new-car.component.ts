import { Component, Input, OnInit } from '@angular/core';

import { register } from 'swiper/element/bundle';



register();

@Component({
  selector: 'mfc-home-new-car',
  templateUrl: './home-new-car.component.html',
  styleUrls: ['./home-new-car.component.scss'],
})
export class HomeNewCarComponent  implements OnInit {
  @Input()  activeSegment!:any;


  constructor() { }

  ngOnInit() {}


}
