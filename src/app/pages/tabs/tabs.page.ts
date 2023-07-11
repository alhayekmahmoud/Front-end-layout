import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('tabs', { static: false }) tabs!: IonTabs;
  selectedTab: any;

  logoPathe="../../../assets/icon/logo.png";
  constructor(private router: Router, private storageService: StorageService) {}

  async setCurrentTab(){
    this.selectedTab=this.tabs.getSelected();
    await this.storageService.set<string>('tab',this.selectedTab);
    console.log(this.selectedTab);

  }

}
