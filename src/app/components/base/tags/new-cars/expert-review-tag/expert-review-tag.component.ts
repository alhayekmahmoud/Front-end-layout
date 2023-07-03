import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfc-expert-review-tag',
  templateUrl: './expert-review-tag.component.html',
  styleUrls: ['./expert-review-tag.component.scss'],
})
export class ExpertReviewTagComponent  implements OnInit {
  expertsReview: any[]=[

    {id:1, img:'assets/images/home/expertReview/ex1.jpg'},
    {id:2, img:'assets/images/home/expertReview/ex2.jpg'},
    {id:3, img:'assets/images/home/expertReview/ex3.jpg'},

  ]

  constructor() { }

  ngOnInit() {}

}
