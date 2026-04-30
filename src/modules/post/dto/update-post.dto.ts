import { IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  id: string;
  @IsString()
  title: string;
  @IsString()
  @IsOptional()
  content?: string;
  @IsString()
  userId: string;
}
