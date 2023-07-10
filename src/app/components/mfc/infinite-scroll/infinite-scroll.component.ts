import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'mfc-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent  implements OnInit {

  items: string[] = [];

  imagePathe = "assets/images/mfc/cars/Audi/"

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    for (let i = 1; i < 50; i++) {
      this.items.push(`${this.imagePathe}${i}.jpg`);
    }
  }

  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
