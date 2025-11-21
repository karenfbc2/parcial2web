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
exports.Auditorio = void 0;
const typeorm_1 = require("typeorm");
const evento_entity_1 = require("../../evento/evento.entity/evento.entity");
let Auditorio = class Auditorio {
    id;
    nombre;
    capacidad;
    ubicacion;
    eventos;
};
exports.Auditorio = Auditorio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", Number)
], Auditorio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Auditorio.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Auditorio.prototype, "capacidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Auditorio.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evento_entity_1.Evento, (evento) => evento.auditorio),
    __metadata("design:type", Array)
], Auditorio.prototype, "eventos", void 0);
exports.Auditorio = Auditorio = __decorate([
    (0, typeorm_1.Entity)()
], Auditorio);
//# sourceMappingURL=auditorio.entity.js.map