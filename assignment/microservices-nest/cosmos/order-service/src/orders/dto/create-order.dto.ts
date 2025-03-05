import { Type } from 'class-transformer';
import { IsArray, IsInt, isInt, IsString, ValidateNested } from 'class-validator';

class OrderItemDto {
  @IsInt()
  productId: number;
  @IsInt()
  price: number;
  @IsInt()
  quantity: number;
}

export class createOrderDto {
  @IsInt()
  customerId: number;
  @IsArray()
  @ValidateNested({ each: true })
  city: string;
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
