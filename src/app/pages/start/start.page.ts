import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from 'src/app/components/base/popover-menu/popover-menu.component';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  slideOpts={
    slidesPeriew:2.2,
  };
  slidesOpts1={
    slidesPerview:1.3,
  };
  populerItems:any[]=[];
  featuredItems:any[]=[];

  item: any[]=[
    {id:1, name:'Aloe Plant', price:700, category:'Aalen', img:'assets/images/start/key.webp'},
    {id:2, name:'Echeveria', price:500, category:'Aalen', img:'assets/images/start/firstCar.jpg'},
    {id:3, name:'snake Plant', price:800, category:'Stuttgert', img:'assets/images/sale.jpg'}
  ]


  constructor(private popCtrl: PopoverController, private router:Router) { }

  ngOnInit() {

    this.populerItems= this.item;
    this.featuredItems= this.item;
  }
  async openPopOver(ev: any) {
    console.log('I am Popo over');
    const popover = await this.popCtrl.create({
      component: PopoverMenuComponent,
      event: ev,
      translucent: true,
      size: 'auto',
      dismissOnSelect: true,
    });
    return await popover.present();
  }

  public  buyNewCarHandlButton(){
    this.router.navigate(['/home']);
  }


  getItem(id: any){
    const item =this.item.find(x=>x.id==id);
    return item
  }

}
