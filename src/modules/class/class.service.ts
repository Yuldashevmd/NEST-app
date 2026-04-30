import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { ReadClassDto } from './dto/read-class.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateClassDto): Promise<string> {
    await this.prisma.class.create({
      data: {
        title: data.title,
        users: data.userIds?.length
          ? {
              create: data.userIds.map((userId) => ({
                user: {
                  connect: { id: userId },
                },
              })),
            }
          : undefined,
      },
    });

    return 'Successfully created';
  }

  async classes(query: { title?: string }): Promise<ReadClassDto[]> {
    const classes = await this.prisma.class.findMany({
      where: { title: { contains: query.title, mode: 'insensitive' } },
      include: {
        users: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
    return classes.map((item) => ({
      ...item,
      users: item.users.map((user) => user.user),
    }));
  }

  async class(id: string): Promise<ReadClassDto | null> {
    return await this.prisma.class.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<CreateClassDto>): Promise<string> {
    await this.prisma.class.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.userIds !== undefined && {
          users: {
            deleteMany: {},
            create: data.userIds.map((userId) => ({
              user: {
                connect: { id: userId },
              },
            })),
          },
        }),
      },
    });

    return 'Successfully updated';
  }

  async remove(id: string): Promise<string> {
    await this.prisma.class.delete({ where: { id } });
    return 'Sucessfully deleted';
  }
}
