import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserMessageResponseDto {
  @ApiProperty()
  @IsString()
  message: string;
}
