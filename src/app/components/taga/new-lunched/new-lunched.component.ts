import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'mfc-new-lunched',
  templateUrl: './new-lunched.component.html',
  styleUrls: ['./new-lunched.component.scss'],
})
export class NewLunchedComponent  implements OnInit {
  @Input()  activeSegment!:any;

  newLunched: any[]=[];

  constructor(private dataService: DataService) {
    if(this.activeSegment ==='buy-new-car'){
      this.newLunched = dataService.getNewNewLunchedCars();
    }else{
      this.newLunched = dataService.getOldNewLunchedCars();
    }
   }

  ngOnInit() {}

}

