import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ReadProfileDto } from './dto/read-profile.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileMessageResponseDto } from './dto/message-response.dto';

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
  @ApiOkResponse({ type: ProfileMessageResponseDto })
  async createProfile(
    @Body() dto: CreateProfileDto,
  ): Promise<ProfileMessageResponseDto> {
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
  @ApiOkResponse({ type: ProfileMessageResponseDto })
  updateProfile(
    @Body() dto: UpdateProfileDto,
    @Req() req: RequestWithUser,
  ): Promise<ProfileMessageResponseDto> {
    return this.profileService.updateProfile(req.user.sub, dto);
  }
}
