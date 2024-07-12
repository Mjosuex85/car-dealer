import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Brand } from './entities/brand.entity';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    /* {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime()
    } */
  ]

  create( createBrandDto: CreateBrandDto ) {
    const { name } = createBrandDto;
    const normalizedName = name.toLocaleLowerCase()
    const verifyName = this.brands.find((brand) => brand.name === normalizedName)

    if(verifyName) throw new ConflictException(`The brand ${normalizedName} alredy exists`)
    
    const brand: Brand = {
        id: uuid(),
        name: normalizedName,
        createdAt: new Date().getTime()
    }

    this.brands.push(brand)
    return brand
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id)
    if(!brand) throw new NotFoundException(`there is no brand with id:${id}`)

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    // Try to find the brand by id
    const brandDB = this.findOne( id )
    // set the date of the upadate
    brandDB.updatedAt = new Date().getTime();
    // Search the index of the brand in the array
    const indexBrand = this.brands.indexOf( brandDB )
    // set the data

    this.brands[indexBrand] = {
        ...brandDB,
        ...updateBrandDto
    }

    return this.brands[indexBrand]
  }

  remove(id: string) {
    this.findOne(id);
       this.brands = this.brands.filter((brand) => brand.id !== id ); 
  }

  fillMockData(brands: Brand[]) {
    this.brands = brands
  }
}
