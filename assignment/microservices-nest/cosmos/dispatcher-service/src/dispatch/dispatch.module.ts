import { Module } from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { DispatchController } from './dispatch.controller';

@Module({
  imports: [DispatchModule],
  providers: [DispatchService],
  controllers: [DispatchController],
})
export class DispatchModule {}
