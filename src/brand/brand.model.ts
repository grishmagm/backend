import * as mongoose from 'mongoose';
import { IsNotEmpty, IsOptional, IsUrl, IsMongoId,IsEmpty,IsBoolean, IsNumber, IsPositive, Min, Max } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
  },
//   description: {
//     type: String,
//   },
//   isSubCategoryAvailable: {
//     type: Boolean,
//     required: false,
//   },
//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   imageId: {
//     type: String,
//     required: true,
//   },
//   filePath:{
//     type: String
//   },
  // new deal section
//   isDealAvailable: {
//     type: Boolean,
//     default:false
//   },
//   delaPercent: {
//       type: Number
//   },
//   dealId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Deals'
//   },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
//   status: {
//     type: Number,
//     default: 1,
//   },
//   objectID: {
//     type: String,
//   },
}, { timestamps: true });

export class BrandDTO {
  @IsOptional()
  _id: string;

  @IsNotEmpty()
  @ApiModelProperty()
  name: string;

//   @IsNotEmpty()
//   @ApiModelProperty()
//   description: string;

//   @IsNotEmpty()
//   @IsUrl()
//   @ApiModelProperty()
//   imageUrl: string;

//   @IsOptional()
//   @ApiModelProperty()
//   imageId: string;

//   @IsNotEmpty()
//   @ApiModelProperty()
//   filePath: string;

  @IsOptional()
  @ApiModelProperty()
  user: string;

//   @IsOptional()
//   @IsBoolean()
//   isDealAvailable: boolean;

//   @IsOptional()
//   delaPercent: number;

//   @IsOptional()
//   @IsMongoId()
//   dealId: string ;

  // @IsNotEmpty()
//   @IsOptional()
//   @ApiModelProperty()
//   status: number;
}

// export class CategoryStatusDTO{
//   @IsNotEmpty()
//   @IsNumber()
//   @Min(0)
//   @Max(1)
//   @ApiModelProperty()
//   status: number;
// }

// export class DealCategoryDTO {
//   @IsOptional()
//   delaPercent: number;

//   @IsOptional()
//   isDealAvailable: boolean;

//   @IsOptional()
//   @IsMongoId()
//   dealId: string 
// }
