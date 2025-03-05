import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { DispatchLocationsService } from './dispatch-locations.service';
import { CreateDispatchLocationDto } from './dto/create-dispatch-location.dto';

@Controller('dispatch-locations')
export class DispatchLocationsController {
  constructor(private readonly dispatchLocationsService: DispatchLocationsService) {}

  @Post()
  async create(@Body() createDispatchLocationDto: CreateDispatchLocationDto) {
    return this.dispatchLocationsService.create(createDispatchLocationDto);
  }

  @Get(':city')
  async findByCity(@Param('city') city: string) {
    return this.dispatchLocationsService.findByCity(city);
  }
}