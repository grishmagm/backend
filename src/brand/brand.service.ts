import {Injectable, HttpStatus} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {BrandDTO} from './brand.model';
import {CommonResponseModel} from '../utils/app-service-data';
import {UsersDTO} from '../users/users.model';
import {ProductsDTO} from '../products/products.model';


@Injectable()
export class BrandService {
    constructor(@InjectModel('Brand') private readonly brandModel: Model<any>,@InjectModel('Products') private readonly productModel: Model<any>) {
    }
    public async getAllCategories(): Promise<CommonResponseModel> {
        console.log("brand running")
        const categories = await this.brandModel.find({});
        return {response_code: HttpStatus.OK, response_data: categories};
    }
    public async saveCategory(user: UsersDTO, categoryData: BrandDTO): Promise<CommonResponseModel> {
        if (user.role !== 'Admin') {
            return {response_code: HttpStatus.UNAUTHORIZED, response_data: 'You are not allowed to create category'};
        }
        const categoryExist = await this.brandModel.findOne({title: categoryData.name});
        if (categoryExist) {
            return {response_code: HttpStatus.BAD_REQUEST, response_data: `Category with name ${categoryData.name} exist`};
        }
        categoryData.user = user._id;
        categoryData['objectID'] = String(Date.now());
        const response = await this.brandModel.create(categoryData) as BrandDTO;
        if (response._id) {
            return {response_code: HttpStatus.CREATED, response_data: 'Category saved successfully'};
        } else {
            return {response_code: HttpStatus.BAD_REQUEST, response_data: 'Could not save category'};
        }
    }
}
