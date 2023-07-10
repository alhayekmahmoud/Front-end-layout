import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  navigate: any;
  constructor() { }

  ngOnInit() {}

  sideMenu() {
    this.navigate =
    [
      {
        title : 'Home',
        url   : '/home',
        icon  : 'home'
      },
      {
        title : 'start',
        url   : '/start',
        icon  : 'chatboxes'
      },
      {
        title : 'settings',
        url   : '/settings',
        icon  : 'settings'
      },
    ];
  }

}
