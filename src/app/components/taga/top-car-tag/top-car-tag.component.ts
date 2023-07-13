import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-top-car-tag',
  templateUrl: './top-car-tag.component.html',
  styleUrls: ['./top-car-tag.component.scss'],
})
export class TopCarTagComponent  implements OnInit {


 topCars: any[]=[

    {id:4, name:'BMW', price:700, category:'er8', img:'assets/images/home/newCars/BMW8.jpg'},
    {id:5, name:'BMW', price:700, category:'er9', img:'assets/images/home/newCars/BMW9.jpg'},
    {id:6, name:'BMW', price:700, category:'er10', img:'assets/images/home/newCars/BMW10.jpg'},

    {id:10, name:'VW', price:700, category:'er4', img:'assets/images/home/newCars/vw4.jpg'},
    {id:11, name:'VW', price:700, category:'er5', img:'assets/images/home/newCars/vw5.jpg'},
    {id:12, name:'VW', price:700, category:'er6', img:'assets/images/home/newCars/vw6.jpg'},

    {id:16, name:'Mercedes', price:700, category:'er4', img:'assets/images/home/newCars/MERCIDES4.jpg'},
    {id:17, name:'Mercedes', price:700, category:'er5', img:'assets/images/home/newCars/MERCIDES5.jpg'},
    {id:18, name:'Mercedes', price:700, category:'er6', img:'assets/images/home/newCars/MERCIDES6.jpg'},
  ]

  constructor() { }

  ngOnInit() {}

}
