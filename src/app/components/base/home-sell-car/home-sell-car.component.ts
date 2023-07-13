import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-home-sell-car',
  templateUrl: './home-sell-car.component.html',
  styleUrls: ['./home-sell-car.component.scss'],
})
export class HomeSellCarComponent  implements OnInit {
  @Input()  activeSegment!:any;
  constructor() { }

  ngOnInit() {}

}
