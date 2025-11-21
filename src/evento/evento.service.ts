import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Evento } from 'src/evento/evento.entity/evento.entity';
import { Ponente } from 'src/ponente/ponente.entity/ponente.entity';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepo: Repository<Evento>,

    @InjectRepository(Ponente)
    private ponenteRepo: Repository<Ponente>,
  ) {}

    // La duración debe ser positiva.
  async crearEvento(dto: any) {
    if (dto.duraciónHoras <= 0) {
      throw new BusinessLogicException("duración debe ser positiva", BusinessError.BAD_REQUEST);
    }

    // 

    const ponente = await this.ponenteRepo.findOne({ where: { id: dto.ponenteId } });
    if (!ponente) throw new BusinessLogicException("Ponente no encontrado", BusinessError.NOT_FOUND);

    // Si el ponente es Invitado, la descripción debe tener al menos 50 caracteres.

    if (ponente.tipoPonente === 'Invitado' && dto.descripcion.length < 50) {
      throw new BusinessLogicException(
        'Debe tener al menos 50 caracteres ', BusinessError.BAD_REQUEST);
    }

    const evento = this.eventoRepo.create({
      ...dto,
      ponente,
    });

    return this.eventoRepo.save(evento);
  }

     // Solo puede aprobarse si tiene auditorio asignado.
  async aprobarEvento(id: number) {
    const e = await this.eventoRepo.findOne({
      where: { id },
      relations: ['auditorio'],
    });

    if (!e) throw new BusinessLogicException("Evento no encontrado", BusinessError.NOT_FOUND);

    if (!e.auditorio) {
      throw new BusinessLogicException('Debe tener un auditorio asignado', BusinessError.BAD_REQUEST);
    }

    e.estado = 'Aprobado';
    return this.eventoRepo.save(e);
  }

  // No se puede eliminar si ya está aprobado.

  async eliminarEvento(id: number) {
    const e = await this.eventoRepo.findOne({ where: { id } });

    if (!e) throw new NotFoundException('Evento no encontrado');

    if (e.estado === 'Aprobado') {
      throw new BadRequestException('No se puede eliminar un evento aprobado');
    }

    return this.eventoRepo.remove(e);
  }

  async findEventoById(id: number) {
    const e = await this.eventoRepo.findOne({ where: { id } });
    if (!e) throw new BusinessLogicException("Evento no encontrado", BusinessError.NOT_FOUND);
    return e;
  }
}
