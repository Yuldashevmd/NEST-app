import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @ApiProperty()
  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;
}
