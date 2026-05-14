import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ReadProfileDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  bio: string | null;

  @ApiProperty()
  @IsString()
  userId: string;
}
