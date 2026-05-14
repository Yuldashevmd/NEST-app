import { Injectable } from '@nestjs/common';
import {
  UpdateProfileDto,
  UpdateProfileResponseDto,
} from './dto/update-profile.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { ReadProfileDto } from './dto/read-profile.dto';
import {
  CreateProfileDto,
  CreateProfileResponseDto,
} from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async createProfile(
    data: CreateProfileDto,
  ): Promise<CreateProfileResponseDto> {
    await this.prisma.profile.create({
      data,
      include: {
        user: true,
      },
    });
    return {
      message: 'Profile created successfully',
    };
  }

  async getProfile(userId: string): Promise<ReadProfileDto | null> {
    const profile = await this.prisma.profile.findUnique({
      where: {
        userId,
      },
      include: {
        user: true,
      },
    });
    if (!profile) {
      return null;
    }
    return {
      id: profile.id,
      bio: profile.bio,
      name: profile.user.name,
      userId: profile.userId,
    };
  }

  async updateProfile(
    userId: string,
    data: UpdateProfileDto,
  ): Promise<UpdateProfileResponseDto> {
    await this.prisma.profile.upsert({
      where: {
        userId,
      },
      update: {
        bio: data.bio,
      },
      create: {
        name: data.name,
        userId,
        bio: data.bio,
      },
    });

    return { message: 'Profile updated successfully' };
  }
}
