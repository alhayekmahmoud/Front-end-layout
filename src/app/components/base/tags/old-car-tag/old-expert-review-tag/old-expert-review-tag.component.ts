import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-old-expert-review-tag',
  templateUrl: './old-expert-review-tag.component.html',
  styleUrls: ['./old-expert-review-tag.component.scss'],
})
export class OldExpertReviewTagComponent  implements OnInit {

  expertsReview: any[]=[

    {id:1, img:'assets/images/home/expertReview/ex1.jpg'},
    {id:2, img:'assets/images/home/expertReview/ex2.jpg'},
    {id:3, img:'assets/images/home/expertReview/ex3.jpg'},

  ]

  constructor() { }

  ngOnInit() {}

}
