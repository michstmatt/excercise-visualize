import { Injectable } from '@angular/core';
import { Exercise } from './exercise';
import { Set } from './set';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  public aggregateExercises(sets: Set[]): Workout[] {
    let dates = sets.map(e => e.date)
      .filter((val, index, self) => val != "" && self.indexOf(val) === index)
      .sort();

    let workouts = dates.map(d => {
      let data = sets.filter(val => val.date == d);
      let exerciseNames = data.map(s=>s.exerciseName).filter((val, index, self) => val != "" && self.indexOf(val) === index );
      let exercises = exerciseNames.map(name => {
        let set = data.filter(e => e.exerciseName == name);
        return new Exercise(name, set);
      });

      return new Workout(d, exercises);
    });

    return workouts;
  }
}
