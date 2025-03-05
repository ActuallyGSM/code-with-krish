import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsInt, isInt, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  address?: string;
}
