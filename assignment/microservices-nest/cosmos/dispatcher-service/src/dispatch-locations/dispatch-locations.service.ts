import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDispatchLocationDto } from './dto/create-dispatch-location.dto';
import { DispatchLocation } from './entity/DispatchLocation.entity';

@Injectable()
export class DispatchLocationsService {
  constructor(
    @InjectRepository(DispatchLocation)
    private readonly dispatchLocationRepository: Repository<DispatchLocation>,
  ) {}

  async create(createDispatchLocationDto: CreateDispatchLocationDto): Promise<DispatchLocation> {
    const dispatchLocation = this.dispatchLocationRepository.create(createDispatchLocationDto);
    return this.dispatchLocationRepository.save(dispatchLocation);
  }

  async findByCity(city: string): Promise<DispatchLocation[]> {
    return this.dispatchLocationRepository.find({ where: { city } });
  }
}