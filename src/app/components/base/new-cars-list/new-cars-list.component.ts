import { DataService } from 'src/app/services/data/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-new-cars-list',
  templateUrl: './new-cars-list.component.html',
  styleUrls: ['./new-cars-list.component.scss'],
})
export class NewCarsListComponent  implements OnInit {
  @Input()  activeSegment!:any;
  cars: any[]=[];


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.cars = this.dataService.getAllNewCars();
  }

}
