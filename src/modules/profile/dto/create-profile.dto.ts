import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  bio: string;

  @ApiProperty()
  @IsString()
  userId: string;
}
