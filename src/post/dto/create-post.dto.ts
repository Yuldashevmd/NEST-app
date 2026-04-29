import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title!: string;
  @IsString()
  @IsOptional()
  content: string;
  @IsNumber()
  userId!: number;
}
