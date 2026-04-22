import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateClassDto): Promise<CreateClassDto> {
    return await this.prisma.class.create({ data });
  }

  async classes(query: { title?: string }) {
    return await this.prisma.class.findMany({
      where: { title: { contains: query.title, mode: 'insensitive' } },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
