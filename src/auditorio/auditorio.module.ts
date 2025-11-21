import { Module } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { AuditorioController } from './auditorio.controller';

@Module({
  providers: [AuditorioService],
  controllers: [AuditorioController]
})
export class AuditorioModule {}
