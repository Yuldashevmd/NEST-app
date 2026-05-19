import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { ReadPostDto } from './dto/read-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { PostMessageResponseDto } from './dto/message-response.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async posts(userId: string): Promise<ReadPostDto[]> {
    return await this.prisma.post.findMany({
      where: { userId },
      include: {
        user: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });
  }

  async post(id: string): Promise<ReadPostDto | null> {
    return await this.prisma.post.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async create(
    dto: CreatePostDto,
    userId: string,
  ): Promise<PostMessageResponseDto> {
    await this.prisma.post.create({
      data: {
        title: dto.title,
        content: dto.content,
        user: { connect: { id: userId } },
      },
    });

    return {
      message: 'Post created successfully',
    };
  }

  async delete(id: string): Promise<PostMessageResponseDto> {
    await this.prisma.post.delete({ where: { id } });
    return { message: 'Post deleted successfully' };
  }

  async update(
    id: string,
    dto: UpdatePostDto,
    userId: string,
  ): Promise<PostMessageResponseDto> {
    await this.prisma.post.update({
      where: { id },
      data: {
        title: dto.title,
        content: dto.content,
        user: { connect: { id: userId } },
      },
    });

    return { message: 'Post updated successfully' };
  }
}
