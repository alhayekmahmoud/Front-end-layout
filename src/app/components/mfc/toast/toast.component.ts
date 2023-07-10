import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        this.handlerMessage = 'More Info clicked';
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Dismiss clicked';
      },
    },
  ];
  handlerMessage = '';
  roleMessage = '';

  setRoleMessage(ev:any) {
    const { role } = ev.detail;
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
