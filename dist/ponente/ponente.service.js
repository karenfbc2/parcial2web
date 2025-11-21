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
exports.PonenteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ponente_entity_1 = require("./ponente.entity/ponente.entity");
const evento_entity_1 = require("../evento/evento.entity/evento.entity");
const business_errors_1 = require("../shared/errors/business-errors");
let PonenteService = class PonenteService {
    ponenteRepo;
    eventoRepo;
    constructor(ponenteRepo, eventoRepo) {
        this.ponenteRepo = ponenteRepo;
        this.eventoRepo = eventoRepo;
    }
    async crearPonente(dto) {
        if (dto.tipoPonente === 'Interno') {
            if (!dto.email.endsWith('.edu')) {
                throw new business_errors_1.BusinessLogicException("email no termina en en .edu", business_errors_1.BusinessError.BAD_REQUEST);
            }
        }
        if (dto.tipoPonente === 'Invitado') {
            if (!(dto.email.includes('@') && dto.email.includes('.'))) {
                throw new business_errors_1.BusinessLogicException("Email inválido para un ponente invitado", business_errors_1.BusinessError.BAD_REQUEST);
            }
        }
        const p = this.ponenteRepo.create(dto);
        return this.ponenteRepo.save(p);
    }
    async findPonenteById(id) {
        const p = await this.ponenteRepo.findOne({ where: { id } });
        if (!p)
            throw new business_errors_1.BusinessLogicException("Ponente no encontrado", business_errors_1.BusinessError.NOT_FOUND);
        return p;
    }
    async eliminarPonente(id) {
        const ponente = await this.ponenteRepo.findOne({ where: { id } });
        if (!ponente)
            throw new business_errors_1.BusinessLogicException("Ponente no encontrado", business_errors_1.BusinessError.NOT_FOUND);
        const eventos = await this.eventoRepo.find({ where: { ponente: { id } } });
        if (eventos.length > 0) {
            throw new business_errors_1.BusinessLogicException("No se puede eliminar ya que tiene eventos asociados", business_errors_1.BusinessError.BAD_REQUEST);
        }
        return this.ponenteRepo.remove(ponente);
    }
};
exports.PonenteService = PonenteService;
exports.PonenteService = PonenteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ponente_entity_1.Ponente)),
    __param(1, (0, typeorm_1.InjectRepository)(evento_entity_1.Evento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PonenteService);
//# sourceMappingURL=ponente.service.js.map