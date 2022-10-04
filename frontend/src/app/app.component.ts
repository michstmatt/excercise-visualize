import { Component, NgModule } from '@angular/core';
import { BlobingestorService } from './blobingestor.service';
import { Set } from './set';
import { Workout } from './workout';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';



  private exerciseData: Set[];
  public exerciseNames: string[];
  public selectedExercise: string;
  public selectedExerciseData: Set[];
  public workouts: Workout[] = [];

  constructor(private blobService: BlobingestorService, private workoutService: WorkoutService) {
    this.exerciseData = [];
    this.exerciseNames = [];
    this.selectedExerciseData = [];
    this.selectedExercise = "";
  }


  public onExerciseChanged() {
    this.selectedExerciseData = this.exerciseData.filter(e => e.exerciseName == this.selectedExercise);
  }

  private async getData() {
    this.blobService.getData().subscribe(async promise => {
      this.exerciseData = await promise;
      this.exerciseNames = this.exerciseData.map(e => e.exerciseName)
        .filter((val, index, self) => val != "" && self.indexOf(val) === index)
        .sort();
      this.selectedExercise = this.exerciseNames[0];

      this.workouts = this.workoutService.aggregateExercises(this.exerciseData);

      this.onExerciseChanged();
    });
  }

  ngOnInit() {
    this.getData();
  }
}
