import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { ReadPostDto } from './dto/read-post.dto';
import { PostService } from './post.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { PostMessageResponseDto } from './dto/message-response.dto';

type RequestWithUser = Request & {
  user: {
    sub: string;
    email: string;
  };
};

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOkResponse({ type: ReadPostDto, isArray: true })
  @Get()
  async posts(@Req() req: RequestWithUser): Promise<ReadPostDto[]> {
    return await this.postService.posts(req.user.sub);
  }

  @ApiOkResponse({ type: ReadPostDto })
  @Get(':id')
  async post(id: string): Promise<ReadPostDto | null> {
    return await this.postService.post(id);
  }

  @ApiOkResponse({ type: PostMessageResponseDto })
  @Post()
  async create(
    @Body() dto: CreatePostDto,
    @Req() req: RequestWithUser,
  ): Promise<PostMessageResponseDto> {
    return await this.postService.create(dto, req.user.sub);
  }

  @ApiOkResponse({ type: PostMessageResponseDto })
  @Delete(':id')
  async delete(@Body() id: string): Promise<PostMessageResponseDto> {
    return await this.postService.delete(id);
  }

  @ApiOkResponse({ type: PostMessageResponseDto })
  @Put(':id')
  async update(
    @Body() dto: UpdatePostDto,
    @Req() req: RequestWithUser,
  ): Promise<PostMessageResponseDto> {
    return await this.postService.update(dto.id, dto, req.user.sub);
  }
}
