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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
const typeorm_1 = require("typeorm");
const ponente_entity_1 = require("../../ponente/ponente.entity/ponente.entity");
const auditorio_entity_1 = require("../../auditorio/auditorio.entity/auditorio.entity");
const asistente_entity_1 = require("../../asistente/asistente.entity/asistente.entity");
let Evento = class Evento {
    id;
    titulo;
    descripcion;
    fecha;
    duraciónHoras;
    estado;
    ponente;
    auditorio;
    asistentes;
};
exports.Evento = Evento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", Number)
], Evento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evento.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evento.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Evento.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Evento.prototype, "duraci\u00F3nHoras", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evento.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ponente_entity_1.Ponente, (p) => p.eventos),
    __metadata("design:type", ponente_entity_1.Ponente)
], Evento.prototype, "ponente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => auditorio_entity_1.Auditorio, (a) => a.eventos),
    __metadata("design:type", auditorio_entity_1.Auditorio)
], Evento.prototype, "auditorio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asistente_entity_1.Asistente, (a) => a.evento),
    __metadata("design:type", Array)
], Evento.prototype, "asistentes", void 0);
exports.Evento = Evento = __decorate([
    (0, typeorm_1.Entity)()
], Evento);
//# sourceMappingURL=evento.entity.js.map