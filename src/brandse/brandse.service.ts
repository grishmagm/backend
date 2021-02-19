import { Injectable } from '@nestjs/common';
import { CreateBrandseDto } from './dto/create-brandse.dto';
import { UpdateBrandseDto } from './dto/update-brandse.dto';

@Injectable()
export class BrandseService {
  create(createBrandseDto: CreateBrandseDto) {
    return 'This action adds a new brandse';
  }

  findAll() {
    return `This action returns all brandse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brandse`;
  }

  update(id: number, updateBrandseDto: UpdateBrandseDto) {
    return `This action updates a #${id} brandse`;
  }

  remove(id: number) {
    return `This action removes a #${id} brandse`;
  }
}
