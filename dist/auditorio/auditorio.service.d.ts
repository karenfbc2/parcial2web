import { Repository } from 'typeorm';
import { Auditorio } from 'src/auditorio/auditorio.entity/auditorio.entity';
export declare class AuditorioService {
    private repo;
    constructor(repo: Repository<Auditorio>);
    crearAuditorio(dto: any): Promise<Auditorio[]>;
}
