import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class ProfileMessageResponseDto {
  @ApiProperty()
  @IsString()
  message: string;
}
