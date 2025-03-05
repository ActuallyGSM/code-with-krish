import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DispatchService } from './dispatch.service';

@Controller('dispatch-locations')
export class DispatchController {
  constructor(private dispatchService: DispatchService) { }

  @Get(':dispatch-locations/city')
  async fetchByEmail(@Body('city') city: string) {
    return await this.dispatchService.create(city);
  }
}
