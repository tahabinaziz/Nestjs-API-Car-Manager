import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
    constructor(private readonly carService:CarService){}

    @Get()
    public async getCar(){
     return this.carService.getCar();
    }
    @Post()
    public async postCar(@Body() car:CarDto){
        return this.carService.postCar(car);
    }
    @Get(':id')
    public async getCarById(@Param('id') id:number){
        return this.carService.getCarById(id);
    }
    @Put(':id')
    public async UpdateCarById(@Param('id') id:number,@Query() query){
        const propertyName= query.propertyName;
        const propertyValue = query.propertyValue
        return this.carService.UpdateCarById(id,propertyName,propertyValue);
    }
    @Delete(':id')
    public async DeleteCarById(@Param('id') id:number){
        return this.carService.DeleteCarById(id);
    }
}
