export class Set{
    public date: string;
    public workoutName: string;
    public duration: string;
    public exerciseName: string;
    public setOrder: number;
    public weight: number;
    public reps: number;
    public distance: number;
    public seconds: number;
    public notes: string;
    public workoutNotes: string;
    public RPE: string;
    public id: string;

    constructor(data: string) {
        const arr = data.split(',');
        if (arr.length != 12) {
            this.date = "";
            this.workoutName = "";
            this.duration = "";
            this.exerciseName = "";
            this.setOrder = 0;
            this.weight = 0;
            this.reps = 0;
            this.distance = 0;
            this.seconds = 0;
            this.notes = "";
            this.workoutNotes = "";
            this.RPE = "";
            this.id = "";
            return;
        }
        this.date = arr[0];
        this.workoutName = arr[1];
        this.duration = arr[2];
        this.exerciseName = arr[3].substring(1, arr[3].length - 1);
        this.setOrder = parseFloat(arr[4]);
        this.weight = parseFloat(arr[5]);
        this.reps = parseFloat(arr[6]);
        this.distance = parseFloat(arr[7]);
        this.seconds = parseFloat(arr[8]);
        this.notes = arr[9];
        this.workoutNotes = arr[10];
        this.RPE = arr[11];
        this.id = this.date + "_" + this.exerciseName + "_" + this.setOrder;
    }


    private static oneRepMaxMap: number[] = [
        0,
        1,
        .97,
        .94,
        .92,
        .89,
        .86,
        .83,
        .81,
        .78,
        .75,
        .73,
        .71,
        .70,
        .68,
        .67,
        .65,
        .64,
        .63,
        .61,
        .60,
        .59,
        .58,
        .57,
        .56,
        .55,
        .54,
        .53,
        .52,
        .51,
        .50];

    public getOneRepMax(): number {
        return this.weight / Set.oneRepMaxMap[this.reps];
    }

    public getTotalVolume(): number {
        return this.weight * this.reps;
    }

}
