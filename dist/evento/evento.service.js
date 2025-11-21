"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
const evento_entity_1 = require("./evento.entity/evento.entity");
const ponente_entity_1 = require("../ponente/ponente.entity/ponente.entity");
let EventoService = class EventoService {
    eventoRepo;
    ponenteRepo;
    constructor(eventoRepo, ponenteRepo) {
        this.eventoRepo = eventoRepo;
        this.ponenteRepo = ponenteRepo;
    }
    async crearEvento(dto) {
        if (dto.duraciónHoras <= 0) {
            throw new business_errors_1.BusinessLogicException("duración debe ser positiva", business_errors_1.BusinessError.BAD_REQUEST);
        }
        const ponente = await this.ponenteRepo.findOne({ where: { id: dto.ponenteId } });
        if (!ponente)
            throw new business_errors_1.BusinessLogicException("Ponente no encontrado", business_errors_1.BusinessError.NOT_FOUND);
        if (ponente.tipoPonente === 'Invitado' && dto.descripcion.length < 50) {
            throw new business_errors_1.BusinessLogicException('Debe tener al menos 50 caracteres ', business_errors_1.BusinessError.BAD_REQUEST);
        }
        const evento = this.eventoRepo.create({
            ...dto,
            ponente,
        });
        return this.eventoRepo.save(evento);
    }
    async aprobarEvento(id) {
        const e = await this.eventoRepo.findOne({
            where: { id },
            relations: ['auditorio'],
        });
        if (!e)
            throw new business_errors_1.BusinessLogicException("Evento no encontrado", business_errors_1.BusinessError.NOT_FOUND);
        if (!e.auditorio) {
            throw new business_errors_1.BusinessLogicException('Debe tener un auditorio asignado', business_errors_1.BusinessError.BAD_REQUEST);
        }
        e.estado = 'Aprobado';
        return this.eventoRepo.save(e);
    }
    async eliminarEvento(id) {
        const e = await this.eventoRepo.findOne({ where: { id } });
        if (!e)
            throw new common_1.NotFoundException('Evento no encontrado');
        if (e.estado === 'Aprobado') {
            throw new common_1.BadRequestException('No se puede eliminar un evento aprobado');
        }
        return this.eventoRepo.remove(e);
    }
    async findEventoById(id) {
        const e = await this.eventoRepo.findOne({ where: { id } });
        if (!e)
            throw new business_errors_1.BusinessLogicException("Evento no encontrado", business_errors_1.BusinessError.NOT_FOUND);
        return e;
    }
};
exports.EventoService = EventoService;
exports.EventoService = EventoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(evento_entity_1.Evento)),
    __param(1, (0, typeorm_1.InjectRepository)(ponente_entity_1.Ponente)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EventoService);
//# sourceMappingURL=evento.service.js.map