import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private readonly repository: Repository<Student>,
  ) {}
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const { name, cpf, birthdate, payment_method } = createStudentDto;
    const item = this.repository.create();
    item.name = name;
    item.cpf = cpf;
    item.birthdate = birthdate;
    item.payment_method = payment_method;

    try {
      await item.save();
      delete item.name;
      delete item.cpf;
      delete item.birthdate;
      delete item.payment_method;
      return item;
    } catch (error) {
      throw new NotFoundException(`Error`);
    }
  }
}
