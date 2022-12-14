import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AppController } from './infra/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
