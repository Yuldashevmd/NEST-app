import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { SubjectQueryDto } from './dto/query.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ReadSubjectsResponseDto } from './dto/read-subjects.dto';
import { SubjectMessageResponseDto } from './dto/message-response.dto';
import { ROLE } from 'src/configs/enums/role';
import { Prisma } from 'prisma/generated/prisma/client';

@Injectable()
export class SubjectService {
  constructor(private readonly prisma: PrismaService) {}

  async subjects(
    query: SubjectQueryDto | undefined,
    userId?: string,
    userRole?: string,
  ): Promise<ReadSubjectsResponseDto> {
    const where: Prisma.SubjectWhereInput = {
      title: { contains: query?.search },
    };

    // teacher bo'lsa, faqat o'ziga tegishli subjectlar
    if (userRole === ROLE.TEACHER) {
      where.teachers = {
        some: { userId },
      };
    }

    const subs = await this.prisma.subject.findMany({
      where,
      include: {
        teachers: {
          include: { user: true },
        },
        classes: {
          include: {
            class: {
              include: {
                users: {
                  include: { user: true },
                },
              },
            },
          },
        },
      },
    });

    return {
      subjects: subs.map((item) => ({
        ...item,
        teachers: item.teachers.map((t) => t.user),
        classes: item.classes.map((c) => ({
          ...c.class,
          users: c.class.users.map((u) => u.user),
        })),
      })),
    };
  }

  async create(dto: CreateSubjectDto): Promise<SubjectMessageResponseDto> {
    await this.prisma.subject.create({
      data:
        dto.classIds?.length > 0
          ? {
              title: dto.title,
              classes: {
                create: dto.classIds.map((classId) => ({
                  class: {
                    connect: {
                      id: classId,
                    },
                  },
                })),
              },
            }
          : {
              title: dto.title,
            },
    });

    return { message: 'Subject created successfully' };
  }

  async delete(id: string): Promise<SubjectMessageResponseDto> {
    await this.prisma.subject.delete({
      where: {
        id,
      },
    });
    return { message: 'Subject deleted successfully' };
  }

  async update(
    id: string,
    dto: UpdateSubjectDto,
  ): Promise<SubjectMessageResponseDto> {
    const { classIds, ...data } = dto;

    const subject = await this.prisma.subject.findUnique({
      where: { id },
    });

    if (!subject) {
      throw new NotFoundException('Subject not found');
    }

    await this.prisma.subject.update({
      where: { id },
      data: {
        ...data,
        classes: classIds
          ? {
              deleteMany: {},
              create: classIds.map((classId) => ({
                class: {
                  connect: { id: classId },
                },
              })),
            }
          : undefined,
      },
    });

    return { message: 'Subject updated successfully' };
  }
}
