import { IsString } from 'class-validator';

export class ReadClassDto {
  @IsString()
  id: string;
  @IsString()
  title: string;
}
