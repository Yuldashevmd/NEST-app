import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @ApiProperty()
  name!: string;

  @IsEmail()
  @ApiProperty()
  email!: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  password!: string;
}

export class RegisterResponseDto {
  @ApiProperty({
    example: 'Successfully registered',
  })
  message: string;
}
