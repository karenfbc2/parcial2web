import { AuditorioService } from './auditorio.service';
export declare class AuditorioController {
    private readonly auditorioService;
    constructor(auditorioService: AuditorioService);
    crearAuditorio(dto: any): Promise<import("./auditorio.entity/auditorio.entity").Auditorio[]>;
}
