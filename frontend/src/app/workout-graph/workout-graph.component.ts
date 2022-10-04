import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Workout } from "../workout";


@Component({
  selector: 'app-workout-graph',
  templateUrl: './workout-graph.component.html',
  styleUrls: ['./workout-graph.component.css']
})
export class WorkoutGraphComponent implements OnInit {

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


  @Input() workouts: Workout[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    let labels = this.workouts.map(w => w.date);
    let weight = this.workouts.map(w => w.totalVolume / 1000);
    let exercises = this.workouts.map(w => w.totalExercises);
    let reps = this.workouts.map(w => w.totalReps / 100);
    let sets = this.workouts.map(w => w.totalSets);
    this.lineChartData = {
      labels: labels,
      datasets: [
        {
          data: weight,
          label: "Total Volume x 1000lbs",
          fill: true,
          tension: 0.5,
          borderColor: 'black',
        },
        {
          data: exercises,
          label: "No of Exercises",
          fill: true,
          tension: 0.5,
          borderColor: 'black',
        },
        {
          data: reps,
          label: "Total reps x 100",
          fill: true,
          tension: 0.5,
          borderColor: 'black',
        },
        {
          data: sets,
          label: "Total sets",
          fill: true,
          tension: 0.5,
          borderColor: 'black',
        },
      ]
    };
  }

}
