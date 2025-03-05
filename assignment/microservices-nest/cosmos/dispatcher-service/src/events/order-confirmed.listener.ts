import { Injectable, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { DispatchLocationsService } from '../dispatch-locations/dispatch-locations.service';
import { Redis } from 'ioredis';
import { OrderConfirmedEvent } from './order-confirmed.event';


@Injectable()
export class OrderConfirmedListener {
  private readonly logger = new Logger(OrderConfirmedListener.name);
  private readonly redis = new Redis({ host: '3.0.159.213', port: 6379 });


  constructor(
    private readonly dispatchLocationsService: DispatchLocationsService,
  ) {}

  @EventPattern('order.confirmed')
  async handleOrderConfirmed(order: OrderConfirmedEvent) {
    const vehicles = await this.dispatchLocationsService.findByCity(order.city);

    if (vehicles.length === 0) {
      this.logger.log(`Cannot find vehicle for order ${order.orderNumber}`);
      return;
    }
    const locKey = `gihanm-product:${order.orderNumber}.lock`;

    const lock = await this.redis.set(locKey, new Date().toISOString(), 'EX', 3600 * 24, 'NX');

    if (lock) {
      this.logger.log(`Vehicle allocated for order ${order.orderNumber}`);
    } else {
      this.logger.log(`All vehicles occupied for order ${order.orderNumber}`);
    }
  }
}