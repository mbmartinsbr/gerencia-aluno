import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';
//import { Bill } from 'src/bill/entities/bill.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly repository: Repository<Enrollment>,
  ) {}

  async create(createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
    function proximaData(d, dia) {
      if (d.getDate() == dia) {
        d.setDate(d.getDate() + 1);
      }
      while (d.getDate() != dia) {
        d.setDate(d.getDate() + 1);
      }
      return d.getDate();
    }
    const { amount, installments, due_day, student_id } = createEnrollmentDto;
    const item = this.repository.create();
    item.amount = amount;
    item.installments = installments;
    item.due_day = due_day;
    item.student_id = student_id;

    try {
      await item.save();
      //let bills: Bill[];
      //let bill_date = new Date();
      //for (let i = 0; i < installments; i++) {
      //  const bill = this.repository.create();
      //  bill.amount = amount / installments;
      //  bill_date = proximaData(bill_date, due_day);
      //  bill.due_date = bill_date;
      //  bill.status = 'open';
      //  await bill.save();
      //  bills.push(bill);
      //}
      return item;
    } catch (error) {
      throw new NotFoundException(`Error`);
    }
  }
}
