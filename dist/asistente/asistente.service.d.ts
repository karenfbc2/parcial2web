import { Repository } from 'typeorm';
import { Asistente } from 'src/asistente/asistente.entity/asistente.entity';
import { Evento } from 'src/evento/evento.entity/evento.entity';
export declare class AsistenteService {
    private asistenteRepo;
    private eventoRepo;
    constructor(asistenteRepo: Repository<Asistente>, eventoRepo: Repository<Evento>);
    registrarAsistente(eventoId: number, dto: any): Promise<Asistente[]>;
    findAsistentesByEvento(id: number): Promise<Asistente[]>;
}
