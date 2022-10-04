import { Set } from "./set";

export class Exercise {

    public totalWeight: number;
    public numberOfSets: number;
    public totalReps: number;

    constructor(public exerciseName: string, public data: Set[])
    {
        this.totalWeight = data.map(e => e.weight * e.reps).reduce((v1, v2) => v1 + v2);
        this.totalReps = data.map(e => e.reps).reduce((v1, v2) => v1 + v2);
        this.numberOfSets = data.length;
    }
}
