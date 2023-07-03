import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from 'src/app/components/base/popover-menu/popover-menu.component';
import { StorageService } from 'src/app/services/storage/storage.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {




  constructor(private popCtrl: PopoverController, private router:Router, private storageService : StorageService ) { }

  ngOnInit() {

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

  public  async buyNewCarHandlButton(activeSegment : string){
    await this.storageService.set<string>('activeSegment', activeSegment);
    this.router.navigate(['/tabs/home']);


  }


  // getItem(id: any){
  //   const item =this.item.find(x=>x.id==id);
  //   return item
  // }

}
