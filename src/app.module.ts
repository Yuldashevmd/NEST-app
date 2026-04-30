import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './configs/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './configs/prisma/prisma.module';
import { ClassModule } from './modules/class/class.module';
import { PostModule } from './modules/post/post.module';
import { ProfileModule } from './modules/profile/profile.module';
import { UserModule } from './modules/user/user.module';
import { SubjectModule } from './modules/subject/subject.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    ClassModule,
    AuthModule,
    PostModule,
    ProfileModule,
    SubjectModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
