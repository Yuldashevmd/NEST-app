import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { ReadPostDto } from './dto/read-post.dto';
import { PostService } from './post.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async posts(): Promise<ReadPostDto[]> {
    return await this.postService.posts();
  }
  @Get(':id')
  async post(id: string): Promise<ReadPostDto | null> {
    return await this.postService.post(id);
  }

  @Post()
  async create(@Body() dto: CreatePostDto): Promise<string> {
    return await this.postService.create(dto);
  }

  @Delete(':id')
  async delete(@Body() id: string): Promise<string> {
    return await this.postService.delete(id);
  }

  @Put(':id')
  async update(@Body() dto: UpdatePostDto): Promise<string> {
    return await this.postService.update(dto.id, dto);
  }
}
