import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfctemplate',
  templateUrl: './mfctemplate.page.html',
  styleUrls: ['./mfctemplate.page.scss'],
})
export class MfctemplatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('ionScroll', ['$event']) onContentScroll($event:any){
    const scrollTop= $event.detail.scrollTop;
    let newPostion= -(scrollTop/5);
    console.log('scrollTop', scrollTop);
  }
  close(){}

}
