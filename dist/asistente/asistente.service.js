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
exports.AsistenteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
const typeorm_2 = require("typeorm");
const asistente_entity_1 = require("./asistente.entity/asistente.entity");
const evento_entity_1 = require("../evento/evento.entity/evento.entity");
let AsistenteService = class AsistenteService {
    asistenteRepo;
    eventoRepo;
    constructor(asistenteRepo, eventoRepo) {
        this.asistenteRepo = asistenteRepo;
        this.eventoRepo = eventoRepo;
    }
    async registrarAsistente(eventoId, dto) {
        const evento = await this.eventoRepo.findOne({
            where: { id: eventoId },
            relations: ['auditorio', 'asistentes'],
        });
        if (!evento)
            throw new common_1.NotFoundException('Evento no encontrado');
        const emailDuplicado = evento.asistentes.find(a => a.email === dto.email);
        if (emailDuplicado) {
            throw new business_errors_1.BusinessLogicException('Ya existe un asistente con este email en este evento', business_errors_1.BusinessError.BAD_REQUEST);
        }
        if (evento.asistentes.length >= evento.auditorio.capacidad) {
            throw new business_errors_1.BusinessLogicException("Capacidad del auditorio superada", business_errors_1.BusinessError.BAD_REQUEST);
        }
        const asist = this.asistenteRepo.create({
            ...dto,
            evento,
        });
        return this.asistenteRepo.save(asist);
    }
    async findAsistentesByEvento(id) {
        const evento = await this.eventoRepo.findOne({
            where: { id },
            relations: ['asistentes'],
        });
        if (!evento)
            throw new business_errors_1.BusinessLogicException("Evento no encontrado", business_errors_1.BusinessError.NOT_FOUND);
        return evento.asistentes;
    }
};
exports.AsistenteService = AsistenteService;
exports.AsistenteService = AsistenteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asistente_entity_1.Asistente)),
    __param(1, (0, typeorm_1.InjectRepository)(evento_entity_1.Evento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AsistenteService);
//# sourceMappingURL=asistente.service.js.map