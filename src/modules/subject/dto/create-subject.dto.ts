import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  @ApiProperty({
    example: 'Mathematics',
    description: 'The title of the subject',
  })
  title: string;
  @ApiProperty({
    example: ['classId1', 'classId2'],
    description: 'The IDs of the classes associated with the subject',
  })
  @IsOptional()
  classIds: string[];

  @IsOptional()
  @ApiProperty({
    example: ['teacherId1', 'teacherId2'],
    description: 'The IDs of the teachers associated with the subject',
  })
  @IsString({ each: true })
  teachers: string[];
}
