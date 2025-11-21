import { EventoService } from './evento.service';
export declare class EventoController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    crearEvento(dto: any): Promise<import("./evento.entity/evento.entity").Evento[]>;
    aprobarEvento(id: number): Promise<import("./evento.entity/evento.entity").Evento>;
    findEventoById(id: number): Promise<import("./evento.entity/evento.entity").Evento>;
    eliminarEvento(id: number): Promise<import("./evento.entity/evento.entity").Evento>;
}
