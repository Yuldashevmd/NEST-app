import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { ReadPostDto } from './dto/read-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async posts(): Promise<ReadPostDto[]> {
    return await this.postService.posts();
  }

  @Post()
  async create(@Body() dto: CreatePostDto): Promise<string> {
    return await this.postService.create(dto);
  }
}
