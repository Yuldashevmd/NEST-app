import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteSubjectResponseDto {
  @ApiProperty({
    example: 'Successfully deleted',
  })
  @IsString()
  message: string;
}
