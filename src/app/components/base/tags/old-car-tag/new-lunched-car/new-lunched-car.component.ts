import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-new-lunched-car',
  templateUrl: './new-lunched-car.component.html',
  styleUrls: ['./new-lunched-car.component.scss'],
})
export class NewLunchedCarComponent  implements OnInit {

  newLunched: any[]=[

    {id:1, name:'BMW', price:700, category:'er5', img:'assets/images/home/newCars/BMW5.jpg'},
    {id:2, name:'BMW', price:700, category:'er6', img:'assets/images/home/newCars/BMW6.jpg'},

    {id:7, name:'VW', price:700, category:'er1', img:'assets/images/home/newCars/vw1.jpg'},
    {id:8, name:'VW', price:700, category:'er2', img:'assets/images/home/newCars/vw2.jpg'},

    {id:13, name:'Mercedes', price:700, category:'er1', img:'assets/images/home/newCars/MERCIDES1.jpg'},
    {id:14, name:'Mercedes', price:700, category:'er2', img:'assets/images/home/newCars/MERCIDES2.jpg'},

  ];

  constructor() { }

  ngOnInit() {}

}
