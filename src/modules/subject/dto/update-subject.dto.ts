import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSubjectDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;
  @ApiPropertyOptional({
    example: ['classId1', 'classId2'],
  })
  @IsOptional()
  @IsString({ each: true })
  classIds?: string[];
}
