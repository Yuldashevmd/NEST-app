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
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ReadSubjectsResponseDto } from './dto/read-subjects.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { SubjectMessageResponseDto } from './dto/message-response.dto';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  @ApiOkResponse({ type: ReadSubjectsResponseDto })
  async subjects(
    @Query() query?: SubjectQueryDto,
  ): Promise<ReadSubjectsResponseDto> {
    return await this.subjectService.subjects(query);
  }

  @Post()
  @ApiOkResponse({ type: SubjectMessageResponseDto })
  async create(
    @Body() dto: CreateSubjectDto,
  ): Promise<SubjectMessageResponseDto> {
    return await this.subjectService.create(dto);
  }

  @Put(':id')
  @ApiOkResponse({ type: SubjectMessageResponseDto })
  async update(
    @Body() dto: UpdateSubjectDto,
    @Query('id') id: string,
  ): Promise<SubjectMessageResponseDto> {
    return await this.subjectService.update(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: SubjectMessageResponseDto })
  async delete(@Query('id') id: string) {
    return await this.subjectService.delete(id);
  }
}
