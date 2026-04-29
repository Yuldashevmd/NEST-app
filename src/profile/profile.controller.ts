import { Body, Controller, Get, Put, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

type RequestWithUser = Request & {
  user: {
    sub: number;
    email: string;
  };
};

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfile(@Req() req: RequestWithUser) {
    return this.profileService.getProfile(req.user.sub);
  }

  @Put()
  updateProfile(@Body() dto: UpdateProfileDto, @Req() req: RequestWithUser) {
    return this.profileService.updateProfile(req.user.sub, dto);
  }
}
