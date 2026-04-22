import { IsArray, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateClassDto {
  @IsString()
  @MaxLength(50)
  title: string;

  @IsArray()
  @IsNumber({}, { each: true })
  userIds: number[];
}
