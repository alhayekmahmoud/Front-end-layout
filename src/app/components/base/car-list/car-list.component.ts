import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'mfc-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  @Input() activeSegment!: string;
  newcars: any[] = [];
  oldcars: any[] = [];
  selectedSegment: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.selectedSegment = this.activeSegment;

    this.setCarsList(this.selectedSegment);
  }
  setCarsList(segment: string) {
    switch (segment) {
      case 'buy-new-car':
        console.log('selected.', this.selectedSegment);
        this.newcars = this.dataService.getAllNewCars();
        break;
      case 'buy-old-car':
        console.log('selected.', this.selectedSegment);
        this.oldcars = this.dataService.getAllOLdCars();
        break;
      default:
        console.log('there is an Error: there is no cars');
    }
  }
}
