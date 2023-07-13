import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'mfc-new-lunched',
  templateUrl: './new-lunched.component.html',
  styleUrls: ['./new-lunched.component.scss'],
})
export class NewLunchedComponent  implements OnInit {
  @Input()  activeSegment!:string;

  newLunched: any[]=[];

  constructor(
    private dataService: DataService,
    private router : Router,
    private storageService : StorageService
    ) {

   }

  ngOnInit() {
    if(this.activeSegment ==='buy-new-car'){
      this.newLunched = this.dataService.getNewNewLunchedCars();
    }else{
      this.newLunched = this.dataService.getOldNewLunchedCars();
    }
  }

  async getAllCarsHandlButton(activeSegment : string){
    await this.storageService.set<string>('carsListActiveSegment', activeSegment);
    this.router.navigate(['/tabs/cars']);
  }

}

