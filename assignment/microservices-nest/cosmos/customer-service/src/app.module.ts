import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer/entity/customer.entity';

@Module({
  imports: [
    CustomerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cosmos',
      entities: [Customer],
      synchronize: true, //only on dev
    }),
  ],
})
export class AppModule {}
