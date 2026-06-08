import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min, Max, IsIn } from 'class-validator';

export class CreateGradeDto {
  @IsString()
  @ApiProperty({ description: 'Studentning ID si' })
  studentId: string;

  @IsString()
  @ApiProperty({ description: 'Class_Subjectning ID si' })
  class_subjectId: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  @ApiProperty({ description: 'Baho' })
  grade: number;

  @ApiProperty({ description: 'Grade type' })
  @IsString()
  @IsIn(['exam', 'quiz', 'homework', 'quarter'])
  gradeType: string;
}
