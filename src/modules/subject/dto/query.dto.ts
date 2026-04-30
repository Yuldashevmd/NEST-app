import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SubjectQueryDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  search?: string;
}
