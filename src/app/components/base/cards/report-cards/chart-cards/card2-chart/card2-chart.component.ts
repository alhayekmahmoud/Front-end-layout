import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto'


@Component({
  selector: 'mfc-card2-chart',
  templateUrl: './card2-chart.component.html',
  styleUrls: ['./card2-chart.component.scss'],
})
export class Card2ChartComponent  implements OnInit {

  public chart: any;
  constructor() { }

  ngOnInit() {
    this.createChart();
    // this.createBieChart();
  }



  createChart(){

    this.chart = new Chart("MyChart2", {
      type: 'pie',
      data: {
        labels: ["Total Orders", "Clients", "Products Sold", "Followers"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#7dd7ef", "#045a65","#6bd098","#fbc658"],
            data: [6000,400,1100,2500]
          }
        ]
      },

  });
  }

}
