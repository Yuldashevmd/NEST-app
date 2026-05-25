import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateClassDto {
  @ApiProperty({
    maxLength: 50,
  })
  @IsString()
  @MaxLength(50)
  title: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  userIds: string[];
}
