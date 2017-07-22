interface IVehicle {
    start(): void;
    stop(): void;
}

export default class Car implements IVehicle {
    private _numberOfWheels: number;
    private _maxSpeed: number;
    private _hasNitrogenBooster: boolean;

    constructor(numberOfWheels: number, maxSpeed: number, hasNitrogenBooster?: boolean) {
        this._numberOfWheels = numberOfWheels;
        this._maxSpeed = maxSpeed;
        this._hasNitrogenBooster = hasNitrogenBooster;
    }

    start(): void {
        console.log("Start!");
    }

    stop(): void {
        console.log("Stop!");
    }
}
