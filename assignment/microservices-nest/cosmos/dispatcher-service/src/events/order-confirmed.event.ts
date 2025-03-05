
export class OrderConfirmedEvent {
    constructor(
      public readonly orderNumber: string,
      public readonly city: string,
    ) {}
  }
  