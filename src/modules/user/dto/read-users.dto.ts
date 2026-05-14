import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SubjectDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  title: string;
}

export class ClassDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    type: () => [SubjectDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubjectDto)
  subjects: SubjectDto[];
}

export class ProfileDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty({
    nullable: true,
  })
  @IsOptional()
  @IsString()
  bio: string | null;
}

export class ReadUserDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty({
    required: false,
    nullable: true,
    type: () => ProfileDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile: ProfileDto | null;

  @ApiProperty({
    type: () => [ClassDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClassDto)
  classes: ClassDto[];

  @ApiProperty()
  @IsDate()
  createdAt: Date;
}

export class ReadUsersResponseDto {
  @ApiProperty({
    type: () => [ReadUserDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReadUserDto)
  users: ReadUserDto[];
}
