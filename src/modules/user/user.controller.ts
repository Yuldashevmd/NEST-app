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
import { ReadUsersResponseDto } from './dto/read-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserMessageResponseDto } from './dto/message-response.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOkResponse({ type: UserMessageResponseDto })
  async create(@Body() dto: CreateUserDto): Promise<UserMessageResponseDto> {
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
  @ApiOkResponse({ type: UserMessageResponseDto })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<UserMessageResponseDto> {
    return await this.userService.update(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserMessageResponseDto })
  async remove(@Param('id') id: string): Promise<UserMessageResponseDto> {
    return await this.userService.remove(id);
  }
}
