import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mfc-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   public activeSegment$ = new BehaviorSubject<string>('scoring');

  constructor() { }

  ngOnInit() {
  }

}
