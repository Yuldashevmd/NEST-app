import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReadPostDto } from './dto/read-post.dto';

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
}
