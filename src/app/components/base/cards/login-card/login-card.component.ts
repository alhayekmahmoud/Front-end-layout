import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../../../services/storage/storage.service';

@Component({
  selector: 'mfc-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent  implements OnInit {

  constructor(private router: Router, private storageService : StorageService) { }

  ngOnInit() {

  }
  public async onLoginButtonCliked(){
    await this.storageService.set<boolean>('isloged',true)
    this.router.navigate(['/start']);
  }

  public  async onSignUpButtonCliked(activeSegment : string){
    await this.storageService.set<boolean>('isloged',true)
    this.router.navigate(['/signup']);


  }

}
