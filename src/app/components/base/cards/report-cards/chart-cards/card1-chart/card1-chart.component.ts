import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'mfc-card1-chart',
  templateUrl: './card1-chart.component.html',
  styleUrls: ['./card1-chart.component.scss'],
})
export class Card1ChartComponent  implements OnInit {
  public chart: any;
  constructor() { }

  ngOnInit() {
    this.createChart();
    // this.createBieChart();
  }



  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'doughnut',
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

