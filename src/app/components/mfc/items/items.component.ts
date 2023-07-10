import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent  implements OnInit {

  items: string[] = [];

  imagePathe = "assets/images/mfc/cars/Audi/"

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    for (let i = 100; i < 110; i++) {
      this.items.push(`${this.imagePathe}${i}.jpg`);
    }
  }

}
