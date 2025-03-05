import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispatchLocation } from 'src/dispatch-locations/entity/DispatchLocation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DispatchLocation]),
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class DatabaseModule {}