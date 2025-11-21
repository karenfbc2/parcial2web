import { Evento } from 'src/evento/evento.entity/evento.entity';
export declare class Auditorio {
    id: number;
    nombre: string;
    capacidad: number;
    ubicacion: string;
    eventos: Evento[];
}
