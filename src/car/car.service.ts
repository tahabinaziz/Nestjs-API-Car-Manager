import { HttpException, Injectable } from '@nestjs/common';
import { resolve } from 'path/posix';
import { Car } from './car.mock';
@Injectable()
export class CarService {
  private cars = Car;
  public getCar() {
    return this.cars;
  }
  public postCar(car) {
    return this.cars.push(car);
  }
  public getCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const car = this.cars.find((car) => car.id === carId);
      if (!car) {
        throw new HttpException('Not Found', 404);
      }
      return resolve(car);
    });
  }

  public DeleteCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const carIndex = this.cars.findIndex((car) => car.id === carId);
      if (carIndex === -1) {
        throw new HttpException('Not Found', 404);
      }
      this.cars.splice(carIndex, 1);
      return resolve(this.cars);
    });
  }
  public UpdateCarById(
    id: number,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const carIndex = this.cars.findIndex((car) => car.id === carId);
      if (carIndex === -1) {
        throw new HttpException('Not Found', 404);
      }
      this.cars[carIndex][propertyName] = propertyValue;
      return resolve(this.cars);
    });
  }
}
