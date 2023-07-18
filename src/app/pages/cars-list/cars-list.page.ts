import { StorageService } from 'src/app/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mfc-cars-list',
  templateUrl: './cars-list.page.html',
  styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {
  selectedSegment='buy-new-car';

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
  }


  async setActiveSegment(activeSegment: string) {
     this.selectedSegment = activeSegment;
    // console.log('selected Segment', this.selectedSegment);

  }
}
