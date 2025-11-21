import { Repository } from 'typeorm';
import { Evento } from 'src/evento/evento.entity/evento.entity';
import { Ponente } from 'src/ponente/ponente.entity/ponente.entity';
export declare class EventoService {
    private eventoRepo;
    private ponenteRepo;
    constructor(eventoRepo: Repository<Evento>, ponenteRepo: Repository<Ponente>);
    crearEvento(dto: any): Promise<Evento[]>;
    aprobarEvento(id: number): Promise<Evento>;
    eliminarEvento(id: number): Promise<Evento>;
    findEventoById(id: number): Promise<Evento>;
}
