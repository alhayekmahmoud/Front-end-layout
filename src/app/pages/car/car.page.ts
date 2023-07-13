import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'mfc-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  virsions = [
    {
      virsion: '4.0L. TFSI',
    },
    {
      virsion: '2.0L. TFSI',
    },
    {
      virsion: '3.2L. TFSI',
    },
  ];


  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Teliphon',
      min: 1,
      max: 100,
    },
    {
      type: 'email',
      placeholder: 'Your E-mail',
    },
  ];

  public contactAlertButtons = ['OK'];
  public contactAlertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },

    {
      type: 'textarea',
      placeholder: 'Writ your message to the dealer',
    },
  ];


  danger = false;
  default = false;
  white = false;
  info = false;
  color:string | undefined

  car: any;
  cars: any[]=[];

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.cars=this.dataService.getAllCars();
    this.route.paramMap.pipe(take(1)).subscribe((paramMap) => {
      console.log(paramMap);
      if (!paramMap.has('id')) {
        this.navCtrl.back();
        return;
      }

      const id = paramMap.get('id');
      console.log(id);
      this.car = this.getCar(id);
      console.log(this.car);
    });
  }
  getCar(id: any) {
    const car = this.cars.find((x) => x.id == id);
    return car;
  }

  onSelectColor(color: string) {
    this.color=color;
  }
  getOffer(){

  }
}
