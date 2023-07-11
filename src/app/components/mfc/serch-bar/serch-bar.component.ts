import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-serch-bar',
  templateUrl: './serch-bar.component.html',
  styleUrls: ['./serch-bar.component.scss'],
})
export class SerchBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  public data = [
    'VW',
    'BMW',
    'Audi',
    'Mercedes',
    'Lamborghini',
    'TOyota',
    'Porsche',
    'Ford',
    'Tesla',
    'Volvo',
  ];
  public results = [...this.data];

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
}
