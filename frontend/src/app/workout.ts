import { Exercise } from "./exercise";

export class Workout {
    public totalVolume: number;
    public totalReps: number;
    public totalSets: number;
    public totalExercises: number;
    constructor(public date: string, public exercises: Exercise[])
    {
        this.totalVolume = exercises.map(e => e.totalWeight).reduce((e1,e2) => e1 + e2);
        this.totalReps = exercises.map(e => e.totalReps).reduce((e1,e2) => e1 + e2);
        this.totalSets = exercises.map(e => e.numberOfSets).reduce((e1, e2) => e1 + e2);
        this.totalExercises = exercises.length;
    }

}
