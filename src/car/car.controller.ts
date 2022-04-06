import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor(private readonly carService:CarService){}

    @Get()
    async getCar(){
     return this.carService.getCar();
    }
    @Post()
    async postCar(){
        return this.carService.getCar();
    }
    @Get(':id')
    async getCarById(){
        return this.carService.getCar();
    }
    @Put(':id')
    async UpdateCarById(){
        return this.carService.getCar();
    }
    @Delete(':id')
    async DeleteCarById(){
        return this.carService.getCar();
    }
}
