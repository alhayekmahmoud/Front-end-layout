import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {
  list: any = ['logout', 'dimiss'];

  constructor() {}

  ngOnInit() {}

  public async handleLogout(): Promise<void> {}

  onDimiss() {}
}
