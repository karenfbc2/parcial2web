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
exports.AuditorioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
const typeorm_2 = require("typeorm");
const auditorio_entity_1 = require("./auditorio.entity/auditorio.entity");
let AuditorioService = class AuditorioService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async crearAuditorio(dto) {
        if (dto.capacidad <= 0) {
            throw new business_errors_1.BusinessLogicException("La capacidad debe ser mayor a cero", business_errors_1.BusinessError.BAD_REQUEST);
        }
        const a = this.repo.create(dto);
        return this.repo.save(a);
    }
};
exports.AuditorioService = AuditorioService;
exports.AuditorioService = AuditorioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auditorio_entity_1.Auditorio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuditorioService);
//# sourceMappingURL=auditorio.service.js.map