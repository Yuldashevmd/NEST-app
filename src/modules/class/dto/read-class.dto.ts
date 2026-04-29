import { IsNumber, IsString } from 'class-validator';

export class ReadClassDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
}
