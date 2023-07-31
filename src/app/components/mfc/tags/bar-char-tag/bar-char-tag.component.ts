import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'mfc-bar-char-tag',
  templateUrl: './bar-char-tag.component.html',
  styleUrls: ['./bar-char-tag.component.scss'],
})
export class BarCharTagComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public barChartOptions!: Partial<ChartOptions>;

  constructor() {
    this.barChartOptions = {
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '2023',
              y: 1292,
              goals: [
                {
                  name: 'Expected',
                  value: 1400,
                  strokeWidth: 5,
                  strokeColor: '#045a65',
                },
              ],
            },

            {
              x: '2022',
              y: 4432,
              goals: [
                {
                  name: 'Expected',
                  value: 5400,
                  strokeWidth: 5,
                  strokeColor: '#045a65',
                },
              ],
            },
            {
              x: '2021',
              y: 5423,
              goals: [
                {
                  name: 'Expected',
                  value: 5200,
                  strokeWidth: 5,
                  strokeColor: '#045a65',
                },
              ],
            },
            {
              x: '2020',
              y: 6653,
              goals: [
                {
                  name: 'Expected',
                  value: 6500,
                  strokeWidth: 5,
                  strokeColor: '#045a65',
                },
              ],
            },
            {
              x: '2019',
              y: 8133,
              goals: [
                {
                  name: 'Expected',
                  value: 6600,
                  strokeWidth: 5,
                  strokeColor: '#045a65',
                },
              ],
            },
            {
              x: '2018',
              y: 7132,
              goals: [
                {
                  name: 'Expected',
                  value: 7500,
                  strokeWidth: 5,
                  strokeColor: '#045a65',
                },
              ],
            },
            {
              x: '2017',
              y: 7332,
              goals: [
                {
                  name: 'Expected',
                  value: 8700,
                  strokeWidth: 5,
                  strokeColor: '#045a65',
                },
              ],
            },
            {
              x: '2016',
              y: 6553,
              goals: [
                {
                  name: 'Expected',
                  value: 7300,
                  strokeWidth: 5,
                  strokeColor: '#045a65',
                },
              ],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#7dd7ef'],
      dataLabels: {
        formatter: function (val: any, opts: any) {
          const goals =
            opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
              .goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#7dd7ef', '#045a65'],
        },
      },
    };
  }
  ngOnInit(): void {}
}
