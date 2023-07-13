import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'mfc-old-cars-list',
  templateUrl: './old-cars-list.component.html',
  styleUrls: ['./old-cars-list.component.scss'],
})
export class OldCarsListComponent  implements OnInit {
  @Input()  activeSegment!:any;
  cars: any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cars = this.dataService.getAllOLdCars();

  }

}
