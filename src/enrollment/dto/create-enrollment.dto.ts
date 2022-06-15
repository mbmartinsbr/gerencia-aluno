import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min, Max } from 'class-validator';

export class CreateEnrollmentDto {
  @ApiProperty({ example: 1200000 })
  @IsNotEmpty()
  @Min(0)
  amount: number;

  @ApiProperty({ example: 3 })
  @IsNotEmpty()
  @Min(1)
  installments: number;

  @ApiProperty({ example: 5 })
  @IsNotEmpty()
  @Min(1)
  @Max(31)
  due_day: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @Min(0)
  student_id: number;
}
