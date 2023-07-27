import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-card3-header',
  templateUrl: './card3-header.component.html',
  styleUrls: ['./card3-header.component.scss'],
})
export class Card3HeaderComponent  implements OnInit {
  public progress = .3;
  constructor() { }

  ngOnInit() {}

}
