import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs';

@Component({
  selector: 'mfc-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
car:any;
  cars: any[]=[
    {id:"1", name:'BMW', price:700, category:'er5', img:'assets/images/home/newCars/BMW5.jpg'},
    {id:"2", name:'BMW', price:700, category:'er6', img:'assets/images/home/newCars/BMW6.jpg'},
    {id:"3", name:'BMW', price:700, category:'er7', img:'assets/images/home/newCars/BMW7.jpg'},
    {id:"4", name:'BMW', price:700, category:'er8', img:'assets/images/home/newCars/BMW8.jpg'},
    {id:"5", name:'BMW', price:700, category:'er9', img:'assets/images/home/newCars/BMW9.jpg'},
    {id:"6", name:'BMW', price:700, category:'er10', img:'assets/images/home/newCars/BMW10.jpg'},

    {id:"7", name:'VW', price:700, category:'er1', img:'assets/images/home/newCars/vw1.jpg'},
    {id:"8", name:'VW', price:700, category:'er2', img:'assets/images/home/newCars/vw2.jpg'},
    {id:"9", name:'VW', price:700, category:'er3', img:'assets/images/home/newCars/vw3.jpg'},
    {id:"10", name:'VW', price:700, category:'er4', img:'assets/images/home/newCars/vw4.jpg'},
    {id:"11", name:'VW', price:700, category:'er5', img:'assets/images/home/newCars/vw5.jpg'},
    {id:"12", name:'VW', price:700, category:'er6', img:'assets/images/home/newCars/vw6.jpg'},

    {id:"13", name:'Mercedes', price:700, category:'er1', img:'assets/images/home/newCars/MERCIDES1.jpg'},
    {id:"14", name:'Mercedes', price:700, category:'er2', img:'assets/images/home/newCars/MERCIDES2.jpg'},
    {id:"15", name:'Mercedes', price:700, category:'er3', img:'assets/images/home/newCars/MERCIDES3.jpg'},
    {id:"16", name:'Mercedes', price:700, category:'er4', img:'assets/images/home/newCars/MERCIDES4.jpg'},
    {id:"17", name:'Mercedes', price:700, category:'er5', img:'assets/images/home/newCars/MERCIDES5.jpg'},
    {id:"18", name:'Mercedes', price:700, category:'er6', img:'assets/images/home/newCars/MERCIDES6.jpg'},
  ];

  constructor(
    public navCtrl: NavController,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(take(1))
    .subscribe(paramMap =>{
      console.log(paramMap);
      if(!paramMap.has('id')){
        this.navCtrl.back();
        return;
      }

      const id = paramMap.get('id');
      console.log(id);
      this.car= this.getCar(id);
      console.log(this.car);


    })
  }
  getCar(id: any){
    const car =this.cars.find(x=>x.id==id);
    return car
  }
}
