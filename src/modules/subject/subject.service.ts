import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { SubjectQueryDto } from './dto/query.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(private readonly prisma: PrismaService) {}

  async subjects(query: SubjectQueryDto | undefined) {
    return await this.prisma.subject.findMany({
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
  }

  async create(dto: CreateSubjectDto) {
    return await this.prisma.subject.create({
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
  }

  async delete(id: string) {
    await this.prisma.subject.delete({
      where: {
        id,
      },
    });
    return 'Subject deleted successfully';
  }

  async update(id: string, dto: UpdateSubjectDto) {
    const { classIds, ...data } = dto;

    const subject = await this.prisma.subject.findUnique({
      where: { id },
    });

    if (!subject) {
      throw new NotFoundException('Subject not found');
    }

    return this.prisma.subject.update({
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
  }
}
