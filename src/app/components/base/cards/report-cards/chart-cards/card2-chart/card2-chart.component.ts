import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/app/services/storage/storage.service';


@Component({
  selector: 'mfc-card2-chart',
  templateUrl: './card2-chart.component.html',
  styleUrls: ['./card2-chart.component.scss'],
})
export class Card2ChartComponent  implements OnInit {

  selectedSegment: string = 'bar-chart' ;



 constructor() {

  }
  async ngOnInit() {


  }


public setActiveSegment(activSegment:string){
  // this.activeSegment$.next(activSegment);
 this.selectedSegment=activSegment;

 console.log('selected Segment',this.selectedSegment);
}

}
