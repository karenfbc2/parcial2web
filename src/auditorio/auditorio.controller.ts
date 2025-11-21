import { Controller, Post, Body } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';

@Controller('auditorios')
export class AuditorioController {
  constructor(private readonly auditorioService: AuditorioService) {}

  @Post()
  crearAuditorio(@Body() dto: any) {
    return this.auditorioService.crearAuditorio(dto);
  }
}


 
