import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const { name, email, address } = createCustomerDto;

    const customer = this.customerRepository.create({
      name,
      email,
      address
    });
    const savedCustomer = await this.customerRepository.save(customer);

    return savedCustomer;
  }
  async fetch(id: any) {
    return await this.customerRepository.findOne({
      where: { id },
    });
  }
  // async fetchAll() {
  //   return await this.orderRepository.find({ relations: ['items'] });
  // }

  // async updateOrderStaus(id: number, updateStatus: UpdateOrderStatus) {
  //   const order = await this.orderRepository.findOne({ where: { id } });
  //   if (!order) {
  //     throw new NotFoundException(`order with id: ${id} is not found`);
  //   }
  //   if (
  //     order.status === OrderStatus.DELIVERED ||
  //     order.status === OrderStatus.CANCELLED
  //   ) {
  //     throw new BadRequestException(
  //       `order status cannot be changed when its delivered or cancelled`,
  //     );
  //   }
  //   order.status = updateStatus.status;
  //   return await this.orderRepository.save(order);
  // }
}
