import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Repository } from 'typeorm';
import { Asistente } from 'src/asistente/asistente.entity/asistente.entity';
import { Evento } from 'src/evento/evento.entity/evento.entity';

@Injectable()
export class AsistenteService {
  constructor(
    @InjectRepository(Asistente)
    private asistenteRepo: Repository<Asistente>,

    @InjectRepository(Evento)
    private eventoRepo: Repository<Evento>,
  ) {}

  async registrarAsistente(eventoId: number, dto: any) {
    const evento = await this.eventoRepo.findOne({
      where: { id: eventoId },
      relations: ['auditorio', 'asistentes'],
    });

    if (!evento) throw new NotFoundException('Evento no encontrado');

    // No puede haber dos asistentes con el mismo email en un mismo evento.
    const emailDuplicado = evento.asistentes.find(a => a.email === dto.email);
    if (emailDuplicado) {
      throw new BusinessLogicException('Ya existe un asistente con este email en este evento', BusinessError.BAD_REQUEST);
    }

    // No puede superarse la capacidad del auditorio del evento.
    if (evento.asistentes.length >= evento.auditorio.capacidad) {
      throw new BusinessLogicException("Capacidad del auditorio superada", BusinessError.BAD_REQUEST);
    }

    const asist = this.asistenteRepo.create({
      ...dto,
      evento,
    });

    return this.asistenteRepo.save(asist);
  }

  async findAsistentesByEvento(id: number) {
    const evento = await this.eventoRepo.findOne({
      where: { id },
      relations: ['asistentes'],
    });

    if (!evento) throw new BusinessLogicException("Evento no encontrado", BusinessError.NOT_FOUND);

    return evento.asistentes;
  }
}
