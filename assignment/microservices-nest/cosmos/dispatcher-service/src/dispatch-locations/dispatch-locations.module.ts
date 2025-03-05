import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispatchLocationsService } from './dispatch-locations.service';
import { DispatchLocationsController } from './dispatch-locations.controller';
import { DispatchLocation } from './entity/DispatchLocation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DispatchLocation])],
  providers: [DispatchLocationsService],
  controllers: [DispatchLocationsController],
})
export class DispatchLocationsModule {}