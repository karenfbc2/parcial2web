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
exports.Ponente = void 0;
const typeorm_1 = require("typeorm");
const evento_entity_1 = require("../../evento/evento.entity/evento.entity");
let Ponente = class Ponente {
    id;
    cedula;
    nombre;
    email;
    tipoPonente;
    especialidad;
    eventos;
};
exports.Ponente = Ponente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", Number)
], Ponente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ponente.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ponente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ponente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ponente.prototype, "tipoPonente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ponente.prototype, "especialidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evento_entity_1.Evento, (evento) => evento.ponente),
    __metadata("design:type", Array)
], Ponente.prototype, "eventos", void 0);
exports.Ponente = Ponente = __decorate([
    (0, typeorm_1.Entity)()
], Ponente);
//# sourceMappingURL=ponente.entity.js.map