/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException} from '@nestjs/common';
import { UpdateCarDto, CreateCarDto } from './dto';
import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private cars: Car[] = [
    /* {
        "id": uuid(),
        "brand": "Toyota",
        "model": "Corolla"
    } */];

    public findAll = () => {
        return this.cars;
    };

    public findOneById = (id: string) => {
        const car = this.cars.find((cars) => cars.id == id);
        if ( !car ) throw new NotFoundException(`Car with id: '${id}' not found`);
        return car;  
    };

    public createCar = (createCarDto: CreateCarDto) => {
        const { brand, model } = createCarDto
        const car = {
            id: uuid(),
            brand,
            model
        }

        this.cars.push(car)
        return createCarDto
    };

    public deleteCarById = (id: string) => {
       this.findOneById(id);
       this.cars = this.cars.filter((car) => car.id !== id ); 
    };

    public updateCarById = (id: string, updateCarDto: UpdateCarDto) => {
        const carDB = this.findOneById( id );
        const carIndex = this.cars.indexOf( carDB )
        
        this.cars[carIndex] = {
            ...carDB,
            ...updateCarDto,
            id,
        };

        return this.cars[carIndex]
    };

    fillMockData( cars: Car[] ) {
        this.cars = cars
      }
}
