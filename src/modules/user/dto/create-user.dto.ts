import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ROLE } from 'src/configs/enums/role';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  role?: ROLE;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Type(() => String)
  @IsString({ each: true })
  classIds?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Type(() => String)
  @IsString({ each: true })
  subjectIds?: string[];
}
