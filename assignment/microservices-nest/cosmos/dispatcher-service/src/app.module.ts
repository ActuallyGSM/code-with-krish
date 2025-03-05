import { Module } from '@nestjs/common';
import { DispatchLocationsModule } from './dispatch-locations/dispatch-locations.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DispatchLocationsModule, DatabaseModule],
})
export class AppModule {}