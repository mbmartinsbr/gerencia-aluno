import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Bill extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'amount', type: 'int' })
  amount: number;

  @UpdateDateColumn({
    name: 'due_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  due_date: Date;

  @Column({
    name: 'status',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  status: string;
}
