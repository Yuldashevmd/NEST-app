import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ReadClassDto } from './dto/read-class.dto';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  async create(@Body() createClassDto: CreateClassDto): Promise<string> {
    return await this.classService.create(createClassDto);
  }

  @Get()
  async classes(@Query() query: { title: string }): Promise<ReadClassDto[]> {
    return await this.classService.classes(query);
  }

  @Get(':id')
  async class(@Param('id') id: string): Promise<ReadClassDto | null> {
    return await this.classService.class(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassDto: UpdateClassDto,
  ): Promise<string> {
    return await this.classService.update(id, updateClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<string> {
    return this.classService.remove(id);
  }
}
