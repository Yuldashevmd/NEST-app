import { IsNumber, IsString } from 'class-validator';

export class ReadPostDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  content: string;
}
