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
import { CreateResponseDto, CreateUserDto } from './dto/create-user.dto';
import { ReadUsersResponseDto } from './dto/read-users.dto';
import { UpdateUserDto, UpdateUserResponseDto } from './dto/update-user.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOkResponse({ type: CreateResponseDto })
  async create(@Body() dto: CreateUserDto): Promise<{ message: string }> {
    return await this.userService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: ReadUsersResponseDto })
  async users(@Query() query: { name: string }): Promise<ReadUsersResponseDto> {
    return await this.userService.users(query);
  }

  @Get(':id')
  async user(@Param('id') id: string) {
    return await this.userService.user(id);
  }

  @Put(':id')
  @ApiOkResponse({ type: UpdateUserResponseDto })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<{ message: string }> {
    return await this.userService.update(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ example: { message: 'Sucessfully deleted' } })
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    return await this.userService.remove(id);
  }
}
