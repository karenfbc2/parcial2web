"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditorioModule = void 0;
const common_1 = require("@nestjs/common");
const auditorio_service_1 = require("./auditorio.service");
const auditorio_controller_1 = require("./auditorio.controller");
let AuditorioModule = class AuditorioModule {
};
exports.AuditorioModule = AuditorioModule;
exports.AuditorioModule = AuditorioModule = __decorate([
    (0, common_1.Module)({
        providers: [auditorio_service_1.AuditorioService],
        controllers: [auditorio_controller_1.AuditorioController]
    })
], AuditorioModule);
//# sourceMappingURL=auditorio.module.js.map