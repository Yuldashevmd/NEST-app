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

  @IsOptional()
  @ApiPropertyOptional({
    example: ['teacherId1', 'teacherId2'],
    description: 'The IDs of the teachers associated with the subject',
  })
  @IsString({ each: true })
  teachers?: string[];
}
