import { Repository } from 'typeorm';
import { Ponente } from 'src/ponente/ponente.entity/ponente.entity';
import { Evento } from 'src/evento/evento.entity/evento.entity';
export declare class PonenteService {
    private ponenteRepo;
    private eventoRepo;
    constructor(ponenteRepo: Repository<Ponente>, eventoRepo: Repository<Evento>);
    crearPonente(dto: any): Promise<Ponente[]>;
    findPonenteById(id: number): Promise<Ponente>;
    eliminarPonente(id: number): Promise<Ponente>;
}
