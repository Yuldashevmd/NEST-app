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
      data: {
        title: dto.title,
        ...(dto.teachers?.length
          ? {
              teachers: {
                create: dto.teachers.map((userId) => ({
                  user: { connect: { id: userId } },
                })),
              },
            }
          : {}),
        ...(dto.classIds?.length
          ? {
              classes: {
                create: dto.classIds.map((classId) => ({
                  class: { connect: { id: classId } },
                })),
              },
            }
          : {}),
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
    const { classIds, teachers, ...data } = dto;

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
        ...(teachers
          ? {
              teachers: {
                deleteMany: {},
                create: teachers.map((userId) => ({
                  user: { connect: { id: userId } },
                })),
              },
            }
          : {}),
        ...(classIds
          ? {
              classes: {
                deleteMany: {},
                create: classIds.map((classId) => ({
                  class: { connect: { id: classId } },
                })),
              },
            }
          : {}),
      },
    });

    return { message: 'Subject updated successfully' };
  }
}
