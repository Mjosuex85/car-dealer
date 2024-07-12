import { Injectable } from '@nestjs/common';
import { CARS_SEED, BRANDS_SEED } from './data/index';

import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ) {}

  populateDB() {
    this.carsService.fillMockData( CARS_SEED )
    this.brandService.fillMockData( BRANDS_SEED )
    return "Seed executed Succesfull"
  }
}
