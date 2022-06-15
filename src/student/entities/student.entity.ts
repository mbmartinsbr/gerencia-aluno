import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 250, nullable: false })
  name: string;

  @Column({ name: 'cpf', type: 'varchar', length: 50, nullable: false })
  cpf: string;

  @UpdateDateColumn({
    name: 'birthdate',
    type: 'timestamptz',
  })
  birthdate: Date;

  @Column({
    name: 'payment_method',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  payment_method: string;
}
