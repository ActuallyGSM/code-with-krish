import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispatchModule } from './dispatch/dispatch.module';

@Module({
  imports: [
    DispatchModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cosmos',
      entities: [],
      synchronize: true, //only on dev
    }),
  ],
})
export class AppModule {}
