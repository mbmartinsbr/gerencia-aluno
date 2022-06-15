import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enrollment extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ name: 'amount', type: 'int', nullable: false })
  amount: number;

  @Column({ name: 'installments', type: 'int', nullable: false })
  installments: number;

  @Column({ name: 'due_day', type: 'int', nullable: false })
  due_day: number;

  @Column({ name: 'student_id', type: 'int', nullable: false })
  student_id: number;
}
