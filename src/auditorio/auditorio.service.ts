import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
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
      throw new BusinessLogicException("La capacidad debe ser mayor a cero", BusinessError.BAD_REQUEST);
    }

    const a = this.repo.create(dto);
    return this.repo.save(a);
  }
}
