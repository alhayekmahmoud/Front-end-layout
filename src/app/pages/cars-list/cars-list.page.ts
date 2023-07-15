import { StorageService } from 'src/app/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mfc-cars-list',
  templateUrl: './cars-list.page.html',
  styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {
  selectedSegment: any;
  public activeSegment$ = new BehaviorSubject<string>('');

  constructor(
    private storageService: StorageService
  ) {
    this.getActiveSegment();
  }

  async ngOnInit() {}

  async getActiveSegment() {
    const selectedSegment = await this.storageService.get<string>(
      'carsListActiveSegment'
    );
    console.log('selected Segment', selectedSegment);

    this.activeSegment$.next(selectedSegment);
  }
}
