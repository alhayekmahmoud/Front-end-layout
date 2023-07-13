import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'mfc-top-car-tag',
  templateUrl: './top-car-tag.component.html',
  styleUrls: ['./top-car-tag.component.scss'],
})
export class TopCarTagComponent implements OnInit {
  @Input() activeSegment!: string;

  topCars: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (this.activeSegment === 'buy-new-car') {
      this.topCars = this.dataService.getNewTopCars();
    } else {
      this.topCars = this.dataService.getOldTopCars();
    }
  }
}
