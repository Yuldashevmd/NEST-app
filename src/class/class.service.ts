import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReadClassDto } from './dto/read-class.dto';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateClassDto): Promise<string> {
    await this.prisma.class.create({ data });
    return 'Sucessfully created';
  }

  async classes(query: { title?: string }): Promise<ReadClassDto[]> {
    return await this.prisma.class.findMany({
      where: { title: { contains: query.title, mode: 'insensitive' } },
    });
  }

  async class(id: number): Promise<ReadClassDto | null> {
    return await this.prisma.class.findUnique({ where: { id } });
  }

  async update(id: number, updateClassDto: UpdateClassDto): Promise<string> {
    await this.prisma.class.update({
      where: { id },
      data: updateClassDto,
    });
    return 'Sucessfully updated';
  }

  async remove(id: number): Promise<string> {
    await this.prisma.class.delete({ where: { id } });
    return 'Sucessfully deleted';
  }
}
