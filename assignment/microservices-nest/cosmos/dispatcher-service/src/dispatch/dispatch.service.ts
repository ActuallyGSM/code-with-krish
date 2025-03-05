import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DispatchService {
  constructor(
  ) {}

  async create(createDispatch: any): Promise<any> {
  

    return null;
  }
}
