import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ponente } from 'src/ponente/ponente.entity/ponente.entity';
import { Evento } from 'src/evento/evento.entity/evento.entity';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class PonenteService {
  constructor(
    @InjectRepository(Ponente)
    private ponenteRepo: Repository<Ponente>,

    @InjectRepository(Evento)
    private eventoRepo: Repository<Evento>,
  ) {}

  async crearPonente(dto: any) {
    //  Si es Interno, el email debe terminar en .edu.
    if (dto.tipoPonente === 'Interno') {
      if (!dto.email.endsWith('.edu')) {
        throw new BusinessLogicException("email no termina en en .edu", BusinessError.BAD_REQUEST);
      }
    }

    // Si es Invitado, el email debe ser válido (contener "@" y dominio).
    if (dto.tipoPonente === 'Invitado') {
      if (!(dto.email.includes('@') && dto.email.includes('.'))) {
        throw new BusinessLogicException("Email inválido para un ponente invitado", BusinessError.BAD_REQUEST);
      }
    }

    //craer ponente
    const p = this.ponenteRepo.create(dto);
    return this.ponenteRepo.save(p);
  }

  async findPonenteById(id: number) {
    const p = await this.ponenteRepo.findOne({ where: { id } });
    if (!p) throw new BusinessLogicException("Ponente no encontrado", BusinessError.NOT_FOUND);
    return p;
  }

  // No se puede eliminar si tiene eventos asociados.
  async eliminarPonente(id: number) {
    const ponente = await this.ponenteRepo.findOne({ where: { id } });
    if (!ponente) throw new BusinessLogicException("Ponente no encontrado", BusinessError.NOT_FOUND);

    const eventos = await this.eventoRepo.find({ where: { ponente: { id } } });

    if (eventos.length > 0) {
      throw new BusinessLogicException("No se puede eliminar ya que tiene eventos asociados" , BusinessError.BAD_REQUEST);
    }

    return this.ponenteRepo.remove(ponente);
  }
}
