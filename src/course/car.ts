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
        console.log("Start! has booster : " + this._hasNitrogenBooster);
    }

    stop(): void {
        console.log("Stop!");
    }

    get HasNitrogenBooster(): boolean {
        return this._hasNitrogenBooster;
    }

    set HasNitrogenBooster(hasNitrogenBooster: boolean) {
        if (hasNitrogenBooster) {
            this._maxSpeed += 50;
        }

        this._hasNitrogenBooster = hasNitrogenBooster;
    }
}
