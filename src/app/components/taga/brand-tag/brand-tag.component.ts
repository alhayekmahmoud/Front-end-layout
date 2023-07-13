import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'mfc-brand-tag',
  templateUrl: './brand-tag.component.html',
  styleUrls: ['./brand-tag.component.scss'],
})
export class BrandTagComponent  implements OnInit {
  @Input()  activeSegment!:any;
  brands: any[]=[];

  constructor(private dataservice: DataService) {
    this.brands = this.dataservice.getBrands();
  }

  ngOnInit() {}

}
