import { Component, OnInit } from '@angular/core';

import { register } from 'swiper/element/bundle';



register();

@Component({
  selector: 'mfc-home-new-car',
  templateUrl: './home-new-car.component.html',
  styleUrls: ['./home-new-car.component.scss'],
})
export class HomeNewCarComponent  implements OnInit {

  cars: any[]=[
    {id:1, name:'BMW', price:700, category:'er5', img:'assets/images/home/newCars/BMW5.jpg'},
    {id:1, name:'BMW', price:700, category:'er6', img:'assets/images/home/newCars/BMW6.jpg'},
    {id:1, name:'BMW', price:700, category:'er7', img:'assets/images/home/newCars/BMW7.jpg'},
    {id:1, name:'BMW', price:700, category:'er8', img:'assets/images/home/newCars/BMW8.jpg'},
    {id:1, name:'BMW', price:700, category:'er9', img:'assets/images/home/newCars/BMW9.jpg'},
    {id:1, name:'BMW', price:700, category:'er10', img:'assets/images/home/newCars/BMW10.jpg'},

    {id:1, name:'VW', price:700, category:'er1', img:'assets/images/home/newCars/vw1.jpg'},
    {id:1, name:'VW', price:700, category:'er2', img:'assets/images/home/newCars/vw2.jpg'},
    {id:1, name:'VW', price:700, category:'er3', img:'assets/images/home/newCars/vw3.jpg'},
    {id:1, name:'VW', price:700, category:'er4', img:'assets/images/home/newCars/vw4.jpg'},
    {id:1, name:'VW', price:700, category:'er5', img:'assets/images/home/newCars/vw5.jpg'},
    {id:1, name:'VW', price:700, category:'er6', img:'assets/images/home/newCars/vw6.jpg'},

    {id:1, name:'Mercedes', price:700, category:'er1', img:'assets/images/home/newCars/MERCIDES1.jpg'},
    {id:1, name:'Mercedes', price:700, category:'er2', img:'assets/images/home/newCars/MERCIDES2.jpg'},
    {id:1, name:'Mercedes', price:700, category:'er3', img:'assets/images/home/newCars/MERCIDES3.jpg'},
    {id:1, name:'Mercedes', price:700, category:'er4', img:'assets/images/home/newCars/MERCIDES4.jpg'},
    {id:1, name:'Mercedes', price:700, category:'er5', img:'assets/images/home/newCars/MERCIDES5.jpg'},
    {id:1, name:'Mercedes', price:700, category:'er6', img:'assets/images/home/newCars/MERCIDES6.jpg'},
  ];


  constructor() { }

  ngOnInit() {}

  getCar(id: string){
    const item =this.cars.find(x=>x.id==id);
    return item
  }

}
