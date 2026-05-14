import { Injectable } from '@nestjs/common';
import { CreateResponseDto, CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { ReadUsersResponseDto } from './dto/read-users.dto';
import { DeleteUserResponseDto } from './dto/delete-user.dto';
import { UpdateUserResponseDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<CreateResponseDto> {
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

    return { message: 'Sucessfully created' };
  }

  async users(query: { name: string }): Promise<ReadUsersResponseDto> {
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
                createdAt: true,

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

    return {
      users: users.map((user) => ({
        ...user,
        classes: user.classes.map((item) => ({
          id: item.class.id,
          title: item.class.title,
          createdAt: item.class.createdAt,
          subjects: item.class.subjects.map((s) => ({
            id: s.subject.id,
            title: s.subject.title,
          })),
        })),
      })),
    };
  }

  async user(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: Partial<CreateUserDto>,
  ): Promise<UpdateUserResponseDto> {
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
    return { message: 'Sucessfully updated' };
  }

  async remove(id: string): Promise<DeleteUserResponseDto> {
    await this.prisma.user.delete({ where: { id } });
    return { message: 'Sucessfully deleted' };
  }
}
