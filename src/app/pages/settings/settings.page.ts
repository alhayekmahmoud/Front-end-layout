import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'mfc-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router, private storageService : StorageService) { }

  ngOnInit() {
  }

  public async handleLogout(): Promise<void> {

    await this.storageService.set<boolean>('isloged',false)
    this.router.navigate(['/login']);
  }

}
