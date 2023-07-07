import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]'
})
export class FadeHeaderDirective {
  @Input('appFadeHeader') toolbar: any;
  constructor(private domCtrl: DomController) {}

  ngOnInit() {
    this.toolbar= this.toolbar.el;
  }
  @HostListener('ionScroll', ['$event']) onContentScroll($event:any){
    let scrollTop= $event.detail.scrollTop;
    if (scrollTop>= 225){
      scrollTop= 225;
    }
    const hexDist = scrollTop.toString(16);
    console.log(hexDist);

    this.domCtrl.write(()=>{
      this.toolbar.style.setProperty('--background', `#ffffff${hexDist}`)
    })

  }
}
