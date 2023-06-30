import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mfc-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  public  onLoginButtonCliked(){
    this.router.navigate(['/start']);
  }

}
