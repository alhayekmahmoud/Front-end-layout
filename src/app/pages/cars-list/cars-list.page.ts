import { StorageService } from 'src/app/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopoverMenuComponent } from 'src/app/components/base/popover-menu/popover-menu.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'mfc-cars-list',
  templateUrl: './cars-list.page.html',
  styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {
  selectedSegment: any;
  public activeSegment$ = new BehaviorSubject<string>('');

 constructor(private popCtrl: PopoverController, private storageService: StorageService) {

  }

 async ngOnInit() {
   const selectedSegment = await this.storageService.get<string>('activeSegment')
   console.log('selected Segment',selectedSegment);

   this.activeSegment$.next(selectedSegment)
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

}
