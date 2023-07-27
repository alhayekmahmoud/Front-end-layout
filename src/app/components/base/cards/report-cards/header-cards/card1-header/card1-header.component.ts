import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-card1-header',
  templateUrl: './card1-header.component.html',
  styleUrls: ['./card1-header.component.scss'],
})
export class Card1HeaderComponent  implements OnInit {
  public progress = .6;
  constructor() {
    // setInterval(() => {
    //   this.progress += 0.01;

    //   // Reset the progress bar when it reaches 100%
    //   // to continuously show the demo
    //   if (this.progress > 1) {
    //     setTimeout(() => {
    //       this.progress = 0;
    //     }, 1000);
    //   }
    // }, 50);
  }

  ngOnInit() {

  }



}
