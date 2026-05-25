import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { SubjectQueryDto } from './dto/query.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ReadSubjectsResponseDto } from './dto/read-subjects.dto';
import { SubjectMessageResponseDto } from './dto/message-response.dto';

@Injectable()
export class SubjectService {
  constructor(private readonly prisma: PrismaService) {}

  async subjects(
    query: SubjectQueryDto | undefined,
  ): Promise<ReadSubjectsResponseDto> {
    const subs = await this.prisma.subject.findMany({
      where: {
        title: {
          contains: query?.search,
        },
      },

      include: {
        classes: {
          include: {
            class: true,
          },
        },
      },
    });

    return {
      subjects: subs.map((item) => ({
        ...item,
        classes: item.classes.map((classItem) => classItem.class),
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
