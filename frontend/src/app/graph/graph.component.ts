import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Set } from "../set";


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  @Input() selectedExercise: string = "";

  @Input() exerciseData: Set[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const exercise = this.exerciseData;
    let labels = exercise.map(e => e.date + " " + e.setOrder);
    let weight = exercise.map(e => e.weight);
    let oneRepMax = exercise.map(e => e.getOneRepMax());
    let totalVolume = exercise.map(e => e.getTotalVolume());
    let reps = exercise.map(e => e.reps);
    this.lineChartData = {
      labels: labels,
      datasets: [
        {
          data: weight,
          label: this.selectedExercise,
          fill: true,
          tension: 0.5,
          borderColor: 'black',
        },
        {
          data: oneRepMax,
          label: this.selectedExercise + " 1 rep max",
          fill: true,
          tension: 0.5,
          borderColor: 'black',
        },
        {
          data: reps,
          label: 'reps',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
        }
      ]
    };
  }

}
