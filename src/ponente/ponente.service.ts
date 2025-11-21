import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ponente } from 'src/ponente/ponente.entity/ponente.entity';
import { Evento } from 'src/evento/evento.entity/evento.entity';

@Injectable()
export class PonenteService {
  constructor(
    @InjectRepository(Ponente)
    private ponenteRepo: Repository<Ponente>,

    @InjectRepository(Evento)
    private eventoRepo: Repository<Evento>,
  ) {}

  async crearPonente(dto: any) {
    if (dto.tipoPonente === 'Interno') {
      if (!dto.email.endsWith('.edu')) {
        throw new BadRequestException('email no termina en en .edu');
      }
    }

    if (dto.tipoPonente === 'Invitado') {
      if (!(dto.email.includes('@') && dto.email.includes('.'))) {
        throw new BadRequestException('Email inválido para un ponente invitado');
      }
    }

    const p = this.ponenteRepo.create(dto);
    return this.ponenteRepo.save(p);
  }

  async findPonenteById(id: number) {
    const p = await this.ponenteRepo.findOne({ where: { id } });
    if (!p) throw new NotFoundException('Ponente no encontrado');
    return p;
  }

  async eliminarPonente(id: number) {
    const ponente = await this.ponenteRepo.findOne({ where: { id } });
    if (!ponente) throw new NotFoundException('Ponente no encontrado');

    const eventos = await this.eventoRepo.find({ where: { ponente: { id } } });

    if (eventos.length > 0) {
      throw new BadRequestException('No se puede eliminar ya que tiene eventos asociados');
    }

    return this.ponenteRepo.remove(ponente);
  }
}
