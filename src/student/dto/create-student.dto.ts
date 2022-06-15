import { ApiProperty } from '@nestjs/swagger';
import { IsCPF, IsDate } from 'brazilian-class-validator';
import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'Novo aluno' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '038.347.910-08' })
  @IsNotEmpty()
  @IsCPF()
  cpf: string;

  @ApiProperty({ example: '23/10/1996' })
  @IsNotEmpty()
  @IsDate()
  birthdate: Date;

  @ApiProperty({ example: 'boleto' })
  @IsNotEmpty()
  @IsIn(['credit_card', 'boleto'])
  payment_method: string;
}
