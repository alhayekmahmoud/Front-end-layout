import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]',
})
export class HideHeaderDirective implements OnInit {
  @Input('appHideHeader') toolbar: any;
  private toolbarHeight = 44;

  constructor(private renderer: Renderer2, private domCtrl: DomController) {}

  ngOnInit() {
    this.toolbar= this.toolbar.el;
    this.domCtrl.read(() => {
      this.toolbarHeight = this.toolbar.clientHieght;
    });
  }
  @HostListener('ionScroll', ['$event']) onContentScroll($event:any){
    const scrollTop= $event.detail.scrollTop;
    let newPostion= -(scrollTop/5);

    if(newPostion <-this.toolbarHeight){
      newPostion = -this.toolbarHeight;
    }

    let newOpacity = 1 - (newPostion/-this.toolbarHeight);

    this.domCtrl.write(()=>{
      this.renderer.setStyle(this.toolbar, 'top', `${newPostion}px`);
      this.renderer.setStyle(this.toolbar, 'opacity', newOpacity);
    })

  }
}