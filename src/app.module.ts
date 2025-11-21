import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PonenteModule } from './ponente/ponente.module';
import { AuditorioModule } from './auditorio/auditorio.module';
import { AsistenteModule } from './asistente/asistente.module';
import { EventoModule } from './evento/evento.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ponente } from 'src/ponente/ponente.entity/ponente.entity';
import { Auditorio } from 'src/auditorio/auditorio.entity/auditorio.entity';
import { Asistente } from 'src/asistente/asistente.entity/asistente.entity';
import { Evento } from 'src/evento/evento.entity/evento.entity';



@Module({
  imports: [PonenteModule, AuditorioModule, AsistenteModule, EventoModule,
    TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'postgres',
     database: 'museum',
     entities: [Ponente, Auditorio, Asistente, Evento],
     dropSchema: true,
     synchronize: true,
     // keepConnectionAlive: true
   }),
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
