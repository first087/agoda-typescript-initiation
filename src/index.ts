import Car from './course/car';
import { SuperCar } from './course/car';

let car: Car = new Car(4, 100);
car.start();

let superCar: SuperCar = new SuperCar(4, 100);
superCar.start();
