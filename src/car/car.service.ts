import { Injectable } from '@nestjs/common';
import {Car} from './car.mock';
@Injectable()
export class CarService {
    private cars = Car;
    public async getCar(){
        return  this.cars;
    }
}
