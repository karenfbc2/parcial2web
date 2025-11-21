import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auditorio } from 'src/auditorio/auditorio.entity/auditorio.entity';

@Injectable()
export class AuditorioService {
  constructor(
    @InjectRepository(Auditorio)
    private repo: Repository<Auditorio>,
  ) {}

  //La capacidad debe ser mayor a cero.

  async crearAuditorio(dto: any) {
    if (dto.capacidad <= 0) {
      throw new BadRequestException('La capacidad debe ser mayor a cero');
    }

    const a = this.repo.create(dto);
    return this.repo.save(a);
  }
}
