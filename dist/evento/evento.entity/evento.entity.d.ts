import { Ponente } from 'src/ponente/ponente.entity/ponente.entity';
import { Auditorio } from 'src/auditorio/auditorio.entity/auditorio.entity';
import { Asistente } from 'src/asistente/asistente.entity/asistente.entity';
export declare class Evento {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: Date;
    duraciónHoras: number;
    estado: string;
    ponente: Ponente;
    auditorio: Auditorio;
    asistentes: Asistente[];
}
