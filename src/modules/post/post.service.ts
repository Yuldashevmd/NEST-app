import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { ReadPostDto } from './dto/read-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async posts(): Promise<ReadPostDto[]> {
    return await this.prisma.post.findMany({
      include: {
        user: true,
      },
    });
  }
  async post(id: number): Promise<ReadPostDto | null> {
    return await this.prisma.post.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async create(dto: CreatePostDto): Promise<string> {
    await this.prisma.post.create({
      data: {
        title: dto.title,
        content: dto.content,
        user: { connect: { id: dto.userId } },
      },
    });

    return 'Post created successfully';
  }

  async delete(id: number): Promise<string> {
    await this.prisma.post.delete({ where: { id } });
    return 'Post deleted successfully';
  }

  async update(id: number, dto: UpdatePostDto): Promise<string> {
    await this.prisma.post.update({
      where: { id },
      data: {
        title: dto.title,
        content: dto.content,
        user: { connect: { id: dto.userId } },
      },
    });

    return 'Post updated successfully';
  }
}
