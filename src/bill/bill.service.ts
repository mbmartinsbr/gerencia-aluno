import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { Bill } from './entities/bill.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill) private readonly repository: Repository<Bill>,
  ) {}

  create(createBillDto: CreateBillDto): Promise<Bill> {
    const item = this.repository.create(createBillDto);
    return this.repository.save(item);
  }
}
