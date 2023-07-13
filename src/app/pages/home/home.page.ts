import { StorageService } from 'src/app/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopoverMenuComponent } from 'src/app/components/base/popover-menu/popover-menu.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'mfc-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   selectedSegment: any;
   public activeSegment$ = new BehaviorSubject<string>('');

  constructor(private popCtrl: PopoverController, private storageService: StorageService) {

   }

  async ngOnInit() {
    const selectedSegment = await this.storageService.get<string>('activeSegment')
    console.log('selected Segment',selectedSegment);

    this.activeSegment$.next(selectedSegment)
  }



}
