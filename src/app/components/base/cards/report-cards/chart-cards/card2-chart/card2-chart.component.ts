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
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },

  });
  }

}
