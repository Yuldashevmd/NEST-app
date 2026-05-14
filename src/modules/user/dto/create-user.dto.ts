import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  role?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Type(() => String)
  @IsString({ each: true })
  classIds?: string[];
}

export class CreateResponseDto {
  @ApiProperty({ example: 'User created successfully' })
  @IsString()
  message: string;
}
