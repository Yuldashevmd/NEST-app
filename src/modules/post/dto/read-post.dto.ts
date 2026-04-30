import { IsString } from 'class-validator';

export class ReadPostDto {
  @IsString()
  id: string;
  @IsString()
  title: string;
  @IsString()
  content: string;
}
