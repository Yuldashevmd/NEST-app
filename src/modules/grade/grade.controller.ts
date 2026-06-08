import { Body, Controller, Post, Req } from '@nestjs/common';
import { GradeService } from './grade.service';
import { Roles } from 'src/configs/decorators/roles.decorator';
import { ROLE } from 'src/configs/enums/role';
import { CreateGradeDto } from './dto/create.dto';

type RequestWithUser = Request & { user: { sub: string; role: ROLE } };

@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  @Roles(ROLE.TEACHER)
  async createGrade(@Req() req: RequestWithUser, @Body() dto: CreateGradeDto) {
    return await this.gradeService.create(req.user.sub, dto);
  }
}
