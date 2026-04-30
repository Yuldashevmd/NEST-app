import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { SubjectQueryDto } from './dto/query.dto';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  async subjects(@Query() query?: SubjectQueryDto) {
    return await this.subjectService.subjects(query);
  }

  @Post()
  async create(@Body() dto: CreateSubjectDto) {
    return await this.subjectService.create(dto);
  }

  @Put(':id')
  async update(@Body() dto: CreateSubjectDto, @Query('id') id: string) {
    return await this.subjectService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Query('id') id: string) {
    return await this.subjectService.delete(id);
  }
}
