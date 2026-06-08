import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { CreateGradeDto } from './dto/create.dto';

@Injectable()
export class GradeService {
  constructor(private prisma: PrismaService) {}

  async create(teacherId: string, dto: CreateGradeDto) {
    // 1. class_subject mavjudmi va undan subjectId/classId ni olamiz
    const classSubject = await this.prisma.class_Subject.findUnique({
      where: { id: dto.class_subjectId },
    });
    if (!classSubject) {
      throw new NotFoundException('Class_subject topilmadi');
    }

    // 2. Bu teacher shu subjectga biriktirilganmi?
    const teaches = await this.prisma.teacher_Subject.findFirst({
      where: {
        userId: teacherId,
        subjectId: classSubject.subjectId,
      },
    });
    if (!teaches) {
      throw new ForbiddenException('Bu subject sizga biriktirilmagan');
    }
    // 3. Student shu classda bormi?
    const studentInClass = await this.prisma.userClass.findFirst({
      where: {
        userId: dto.studentId,
        classId: classSubject.classId,
      },
    });
    if (!studentInClass) {
      throw new BadRequestException('Bu student ushbu classda emas');
    }

    // 4. Baholanayotgan user haqiqatan student rolimi?
    const student = await this.prisma.user.findUnique({
      where: { id: dto.studentId },
      select: { role: true },
    });
    if (student?.role !== 'STUDENT') {
      throw new BadRequestException("Faqat studentga baho qo'yish mumkin");
    }

    return this.prisma.student_Grade.create({
      data: {
        studentId: dto.studentId,
        teacherId,
        class_subjectId: dto.class_subjectId,
        grade: dto.grade,
        gradeType: dto.gradeType,
      },
    });
  }
}
