import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { Customer } from './entity/customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) { }

  @Post()
  async create(@Body() createCustomerrDto: CreateCustomerDto): Promise<Customer> {
    return await this.customerService.create(createCustomerrDto);
  }
  @Get(':email')
  async fetchByEmail(@Body('email') email: string) {
    return await this.customerService.fetch(email);
  }
  // @Get()
  // async fetchAll() {
  //   return await this.ordersService.fetchAll();
  // }
  // @Patch(':id/status')
  // async updateOrderStatus(
  //   @Param('id') id: number,
  //   @Body() updateOrderStatus: UpdateOrderStatus,
  // ) {
  //   return await this.ordersService.updateOrderStaus(id, updateOrderStatus);
  // }
}
