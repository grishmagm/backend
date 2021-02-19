import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BrandseService } from './brandse.service';
import { CreateBrandseDto } from './dto/create-brandse.dto';
import { UpdateBrandseDto } from './dto/update-brandse.dto';

@Controller('brandse')
export class BrandseController {
  constructor(private readonly brandseService: BrandseService) {}

  @Post()
  create(@Body() createBrandseDto: CreateBrandseDto) {
    return this.brandseService.create(createBrandseDto);
  }

  @Get()
  findAll() {
    return this.brandseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandseService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBrandseDto: UpdateBrandseDto) {
    return this.brandseService.update(+id, updateBrandseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandseService.remove(+id);
  }
}
