import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ReadUserDto } from './dto/read-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<string> {
    return await this.userService.create(dto);
  }

  @Get()
  async users(@Query() query: { name: string }): Promise<ReadUserDto[]> {
    return await this.userService.users(query);
  }

  @Get(':id')
  async user(@Param('id') id: string) {
    return await this.userService.user(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<string> {
    return await this.userService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return await this.userService.remove(id);
  }
}
