import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(userId: number) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        userId,
      },
      include: {
        user: true,
      },
    });

    return profile;
  }

  async updateProfile(userId: number, data: UpdateProfileDto) {
    const profile = await this.prisma.profile.upsert({
      where: {
        userId,
      },
      update: {
        bio: data.bio,
      },
      create: {
        userId,
        bio: data.bio,
      },
    });

    return profile;
  }
}
