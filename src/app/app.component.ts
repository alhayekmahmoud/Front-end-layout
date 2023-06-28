import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor( private router: Router,) {}
  async ngOnInit() {
    await SplashScreen.hide();

    // Show the splash for an indefinite amount of time:
    // await SplashScreen.show({
    //   autoHide: false,
    // });

    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    this.router.navigate(['/login']);
  }
}
