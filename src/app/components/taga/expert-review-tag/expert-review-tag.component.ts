import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'mfc-expert-review-tag',
  templateUrl: './expert-review-tag.component.html',
  styleUrls: ['./expert-review-tag.component.scss'],
})
export class ExpertReviewTagComponent  implements OnInit {
  @Input()  activeSegment!:any;
  expertsReview: any[]=[]

  constructor(private dataservice: DataService) {
    this.expertsReview= this.dataservice.getExpertsReview();
  }

  ngOnInit() {}

}
