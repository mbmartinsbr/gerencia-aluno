import { IsDate } from 'brazilian-class-validator';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  IsIn,
} from 'class-validator';

export class CreateBillDto {
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  amount: number;

  @IsNotEmpty()
  @IsDate()
  due_date: Date;

  @IsString()
  @IsOptional()
  @IsIn(['open', 'pending', 'paid'])
  status: string;
}
