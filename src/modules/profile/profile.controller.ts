import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import {
  UpdateProfileDto,
  UpdateProfileResponseDto,
} from './dto/update-profile.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ReadProfileDto } from './dto/read-profile.dto';
import {
  CreateProfileDto,
  CreateProfileResponseDto,
} from './dto/create-profile.dto';

type RequestWithUser = Request & {
  user: {
    sub: string;
    email: string;
  };
};

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiOkResponse({ type: CreateProfileResponseDto })
  async createProfile(
    @Body() dto: CreateProfileDto,
  ): Promise<CreateProfileResponseDto> {
    return this.profileService.createProfile(dto);
  }

  @Get()
  @ApiOkResponse({ type: ReadProfileDto })
  async getProfile(
    @Req() req: RequestWithUser,
  ): Promise<ReadProfileDto | null> {
    return this.profileService.getProfile(req.user.sub);
  }

  @Put()
  @ApiOkResponse({ type: UpdateProfileDto })
  updateProfile(
    @Body() dto: UpdateProfileDto,
    @Req() req: RequestWithUser,
  ): Promise<UpdateProfileResponseDto> {
    return this.profileService.updateProfile(req.user.sub, dto);
  }
}
