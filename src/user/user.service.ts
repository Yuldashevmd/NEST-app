import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<string> {
    await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        classes: data.classIds?.length
          ? {
              create: data.classIds.map((classId) => ({
                class: { connect: { id: classId } },
              })),
            }
          : undefined,
      },
      include: { classes: { include: { class: true } } },
    });

    return 'Sucessfully created';
  }

  async users(query: { name: string }) {
    const users = await this.prisma.user.findMany({
      where: {
        name: {
          contains: query.name,
          mode: 'insensitive',
        },
      },
      include: {
        classes: {
          include: {
            class: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
        posts: true,
      },
    });

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      classes: user.classes.map((item) => item.class),
      posts: user.posts,
    }));
  }

  async user(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateUserDto>): Promise<string> {
    await this.prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        ...(data.classIds
          ? {
              classes: {
                deleteMany: {},
                create: data.classIds.map((classId) => ({
                  class: {
                    connect: { id: classId },
                  },
                })),
              },
            }
          : {}),
      },
    });
    return 'Sucessfully updated';
  }

  async remove(id: number): Promise<string> {
    await this.prisma.user.delete({ where: { id } });
    return 'Sucessfully deleted';
  }
}
