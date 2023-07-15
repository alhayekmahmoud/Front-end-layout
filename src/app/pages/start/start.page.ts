import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/services/storage/storage.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {




  constructor( private router:Router, private storageService : StorageService ) { }

  ngOnInit() {

  }

  public  async buyNewCarHandlButton(activeSegment : string){
    await this.storageService.set<string>('activeSegment', activeSegment);
    this.router.navigate(['/tabs/home']);


  }
}
