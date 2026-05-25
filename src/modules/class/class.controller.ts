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
import { ClassMessageResponseDto } from './dto/message-response.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ROLE } from 'src/configs/enums/role';
import { Roles } from 'src/configs/decorators/roles.decorator';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @ApiOkResponse({ type: ClassMessageResponseDto })
  @Roles(ROLE.ADMIN)
  @Post()
  async create(
    @Body() createClassDto: CreateClassDto,
  ): Promise<ClassMessageResponseDto> {
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

  @ApiOkResponse({ type: ClassMessageResponseDto })
  @Roles(ROLE.ADMIN)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassDto: UpdateClassDto,
  ): Promise<ClassMessageResponseDto> {
    return await this.classService.update(id, updateClassDto);
  }

  @ApiOkResponse({ type: ClassMessageResponseDto })
  @Roles(ROLE.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<ClassMessageResponseDto> {
    return this.classService.remove(id);
  }
}
