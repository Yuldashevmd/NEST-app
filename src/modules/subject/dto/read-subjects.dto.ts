import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

class SubjectClassDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  createdAt: Date;
}

export class ReadSubjectsDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  createdAt: Date;

  @IsOptional()
  @ApiProperty()
  classes?: SubjectClassDto[];
}

export class ReadSubjectsResponseDto {
  @ApiProperty({
    type: () => [ReadSubjectsDto],
  })
  subjects: ReadSubjectsDto[];
}
