import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';

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
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,

        classes: {
          select: {
            class: {
              select: {
                id: true,
                title: true,

                subjects: {
                  select: {
                    subject: {
                      select: {
                        id: true,
                        title: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },

        posts: {
          select: {
            id: true,
            title: true,
            content: true,
          },
        },

        profile: {
          select: {
            id: true,
            bio: true,
          },
        },
      },
    });

    return users;
  }

  async user(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<CreateUserDto>): Promise<string> {
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

  async remove(id: string): Promise<string> {
    await this.prisma.user.delete({ where: { id } });
    return 'Sucessfully deleted';
  }
}
