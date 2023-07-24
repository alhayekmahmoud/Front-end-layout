import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-mfctemplate',
  templateUrl: './mfctemplate.page.html',
  styleUrls: ['./mfctemplate.page.scss'],
})
export class MfctemplatePage implements OnInit {
  @ViewChildren('templateList', { read: ElementRef })
  templateListRef!: QueryList<ElementRef>;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }
  @HostListener('ionScroll', ['$event']) onContentScroll($event:any){
    const scrollTop= $event.detail.scrollTop;
    let newPostion= -(scrollTop/5);
    console.log('scrollTop', scrollTop);
  }
  templates = [
    {
      id: 0,
      background: 'assets/icon/logo.png',
      screenPath: 'hotel-booking',
      text: 'hello'
    }
  ];
  ngAfterViewInit(): void {
    this.initListAnimation();
  }
  ionViewDidEnter(){
    this.initListAnimation();
  }
  initListAnimation() {
    const itemRefArray = this.templateListRef.toArray();
    for (let i = 0; i < itemRefArray.length; i++) {
      const element = itemRefArray[i].nativeElement;

      this.animationCtrl
        .create()
        .addElement(element)
        .duration(1000)
        .delay(i * (1000 / 3))
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', 'translateY(50px)', 'translatey(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    }
  }
  close(){}

}
