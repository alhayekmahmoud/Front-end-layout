import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor( private router: Router, private storageService: StorageService) {}
  async ngOnInit() {
    await SplashScreen.hide();

    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    const isloged = await this.storageService.get<boolean>('isloged');

     if( isloged){
      console.log('you are loged in');

    }else
     this.router.navigate(['/login']);
  }
}
