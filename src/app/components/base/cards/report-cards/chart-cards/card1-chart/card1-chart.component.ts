import { Component, OnInit, ViewChild } from '@angular/core';

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
  colors:string[]
};

@Component({
  selector: 'mfc-card1-chart',
  templateUrl: './card1-chart.component.html',
  styleUrls: ['./card1-chart.component.scss'],
})
export class Card1ChartComponent  implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public totalChartOptions!: Partial<ChartOptions>;
  public clientChartOptions!: Partial<ChartOptions>;
  public productSoldChartOptions!: Partial<ChartOptions>;
  public followersChartOptions!: Partial<ChartOptions>;

  constructor() {
    this.totalChartOptions = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [67],
      colors: ["#7dd7ef"],
      labels: ["Total Orders"]

    };
    this.clientChartOptions = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [12],
      colors: ["#045a65"],
      labels: ["clients"]

    };
    this.productSoldChartOptions = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [30],
      colors: ["#6bd098"],
      labels: ["product Sold"]

    };
    this.followersChartOptions = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [45.9],
      colors: ["#fbc658"],
      labels: ["followers"]

    };
  }

  ngOnInit() {}

}
