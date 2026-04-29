import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  @IsOptional()
  content?: string;
  @IsNumber()
  userId: number;
}
