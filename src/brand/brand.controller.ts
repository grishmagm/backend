import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UsersDTO } from 'src/users/users.model';
import { CommonResponseModel } from 'src/utils/app-service-data';
import { GetUser } from 'src/utils/user.decorator';
import { BrandDTO } from './brand.model';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
    constructor(private brandService: BrandService) {

    }

    @Get('brand/all')
    public getAllCategories(): Promise<CommonResponseModel> {
        return this.brandService.getAllCategories();
    }
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Post('brand/add')
    public saveCategory(@GetUser() user: UsersDTO, @Body() categoryData: BrandDTO): Promise<CommonResponseModel> {
        return this.brandService.saveCategory(user, categoryData);
    }
}
