import { IsArray, IsString, MaxLength } from 'class-validator';

export class CreateClassDto {
  @IsString()
  @MaxLength(50)
  title: string;

  @IsArray()
  @IsString({ each: true })
  userIds: string[];
}
