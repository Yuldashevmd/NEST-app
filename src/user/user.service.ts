import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return await this.prisma.user.create({ data });
  }

  async users(query: { name: string }) {
    return await this.prisma.user.findMany({
      where: {
        name: {
          contains: query.name,
          mode: 'insensitive',
        },
      },
    });
  }

  async user(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateUserDto>) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
