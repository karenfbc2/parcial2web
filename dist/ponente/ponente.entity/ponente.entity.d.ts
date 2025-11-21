import { Evento } from 'src/evento/evento.entity/evento.entity';
export declare class Ponente {
    id: number;
    cedula: number;
    nombre: string;
    email: string;
    tipoPonente: string;
    especialidad: string;
    eventos: Evento[];
}
