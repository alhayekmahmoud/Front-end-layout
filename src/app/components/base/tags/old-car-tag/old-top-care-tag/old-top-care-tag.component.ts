import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-old-top-care-tag',
  templateUrl: './old-top-care-tag.component.html',
  styleUrls: ['./old-top-care-tag.component.scss'],
})
export class OldTopCareTagComponent  implements OnInit {


  topCars: any[]=[

    {id:1, name:'BMW', price:700, category:'er8', img:'assets/images/home/newCars/BMW8.jpg'},
    {id:1, name:'BMW', price:700, category:'er9', img:'assets/images/home/newCars/BMW9.jpg'},
    {id:1, name:'BMW', price:700, category:'er10', img:'assets/images/home/newCars/BMW10.jpg'},

    {id:1, name:'VW', price:700, category:'er4', img:'assets/images/home/newCars/vw4.jpg'},
    {id:1, name:'VW', price:700, category:'er5', img:'assets/images/home/newCars/vw5.jpg'},
    {id:1, name:'VW', price:700, category:'er6', img:'assets/images/home/newCars/vw6.jpg'},

    {id:1, name:'Mercedes', price:700, category:'er4', img:'assets/images/home/newCars/MERCIDES4.jpg'},
    {id:1, name:'Mercedes', price:700, category:'er5', img:'assets/images/home/newCars/MERCIDES5.jpg'},
    {id:1, name:'Mercedes', price:700, category:'er6', img:'assets/images/home/newCars/MERCIDES6.jpg'},
  ]

  constructor() { }

  ngOnInit() {}

}
