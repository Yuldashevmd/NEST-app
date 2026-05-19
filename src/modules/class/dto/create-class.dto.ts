import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, MaxLength } from 'class-validator';

export class CreateClassDto {
  @ApiProperty({
    maxLength: 50,
  })
  @IsString()
  @MaxLength(50)
  title: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  userIds: string[];
}
