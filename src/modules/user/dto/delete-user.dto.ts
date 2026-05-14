import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteUserResponseDto {
  @ApiProperty({ example: 'Successfully deleted' })
  @IsString()
  message: string;
}
