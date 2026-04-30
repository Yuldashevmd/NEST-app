import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { SubjectQueryDto } from './dto/query.dto';

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
    });
  }

  async create(dto: CreateSubjectDto) {
    return await this.prisma.subject.create({
      data:
        dto.subjectIds.length > 0
          ? {
              title: dto.title,
              classes: {
                create: dto.subjectIds.map((classId) => ({
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

  async update(id: string, dto: CreateSubjectDto) {
    await this.prisma.subject.update({
      where: {
        id,
      },
      data:
        dto.subjectIds.length > 0
          ? {
              title: dto.title,
              classes: {
                deleteMany: {
                  subjectId: id,
                },
                create: dto.subjectIds.map((classId) => ({
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
    return 'Subject updated successfully';
  }
}
