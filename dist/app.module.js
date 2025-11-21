"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const ponente_module_1 = require("./ponente/ponente.module");
const auditorio_module_1 = require("./auditorio/auditorio.module");
const asistente_module_1 = require("./asistente/asistente.module");
const evento_module_1 = require("./evento/evento.module");
const typeorm_1 = require("@nestjs/typeorm");
const ponente_entity_1 = require("./ponente/ponente.entity/ponente.entity");
const auditorio_entity_1 = require("./auditorio/auditorio.entity/auditorio.entity");
const asistente_entity_1 = require("./asistente/asistente.entity/asistente.entity");
const evento_entity_1 = require("./evento/evento.entity/evento.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [ponente_module_1.PonenteModule, auditorio_module_1.AuditorioModule, asistente_module_1.AsistenteModule, evento_module_1.EventoModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'museum',
                entities: [ponente_entity_1.Ponente, auditorio_entity_1.Auditorio, asistente_entity_1.Asistente, evento_entity_1.Evento],
                dropSchema: true,
                synchronize: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map