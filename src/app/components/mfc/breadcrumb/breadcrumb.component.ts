import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mfc-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent  implements OnInit {
  @ViewChild('popover') popover: any;

  isOpen = false;
  collapsedBreadcrumbs: HTMLIonBreadcrumbElement[] = [];

  async presentPopover(e: Event) {
    this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
    this.popover.event = e;
    this.isOpen = true;
  }

  constructor() { }

  ngOnInit() {}

}
