import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-home-old-car',
  templateUrl: './home-old-car.component.html',
  styleUrls: ['./home-old-car.component.scss'],
})
export class HomeOldCarComponent  implements OnInit {
  @Input()  activeSegment!:any;
  constructor() { }

  ngOnInit() {}

}
