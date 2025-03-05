import { IsEnum, IsOptional, IsString } from 'class-validator';


export class UpdateOrderStatus {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  address?: string;
}
