import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
})
export class ActionSheetComponent  implements OnInit {

  public actionSheetButtons = [
    {
      text: 'Save',
      role: 'save',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() { }

  ngOnInit() {}

}
