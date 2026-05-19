import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ReadPostDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;
}
