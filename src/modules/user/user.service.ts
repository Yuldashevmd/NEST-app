import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { ReadUsersResponseDto } from './dto/read-users.dto';
import { UserMessageResponseDto } from './dto/message-response.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<UserMessageResponseDto> {
    const hashedPassword = await bcrypt.hash(data.password || '123456', 10);

    await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role?.toUpperCase() || 'STUDENT',
        password: hashedPassword,
        profile: {
          create: {
            name: data.name,
            bio: 'Hello my name is ' + data.name,
          },
        },
        subjects: data.subjectIds?.length
          ? {
              create: data.subjectIds.map((subjectId) => ({
                subject: { connect: { id: subjectId } },
              })),
            }
          : undefined,
        classes: data.classIds?.length
          ? {
              create: data.classIds.map((classId) => ({
                class: { connect: { id: classId } },
              })),
            }
          : undefined,
      },
      include: {
        profile: true,
        classes: { include: { class: true } },
        subjects: { include: { subject: true } },
      },
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
        role: true,
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

        studentGrades: {
          select: {
            id: true,
            grade: true,
            createdAt: true,
            gradeType: true,
            class_subject: {
              select: {
                id: true,
                class: {
                  select: {
                    id: true,
                    title: true,
                  },
                },
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
  ): Promise<UserMessageResponseDto> {
    await this.prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        role: data.role?.toUpperCase(),
        subjects: data.subjectIds?.length
          ? {
              deleteMany: {},
              create: data.subjectIds.map((subjectId) => ({
                subject: { connect: { id: subjectId } },
              })),
            }
          : {},
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

  async remove(id: string): Promise<UserMessageResponseDto> {
    await this.prisma.user.delete({ where: { id } });
    return { message: 'Sucessfully deleted' };
  }
}
