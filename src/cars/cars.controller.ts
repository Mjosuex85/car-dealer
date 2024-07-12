import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post} from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCarDto, CreateCarDto } from './dto';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) {}

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar( createCarDto )
  };

  @Get()
  getAllcars() {
    return this.carsService.findAll()
  };

  @Get(':id')
  getCarsById(@Param('id', ParseUUIDPipe) id: string ) {
    return this.carsService.findOneById( id )
  };

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto ) 
  {
     return this.carsService.updateCarById( id, updateCarDto )
  };

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCarById( id )
  };
  
}
