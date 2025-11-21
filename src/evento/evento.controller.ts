import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { EventoService } from './evento.service';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  crearEvento(@Body() dto: any) {
    return this.eventoService.crearEvento(dto);
  }

  //patch pq solo se modifica un parametro 
  @Patch(':id/aprobar')
  aprobarEvento(@Param('id', ParseIntPipe) id: number) {
    return this.eventoService.aprobarEvento(id);
  }

  @Get(':id')
  findEventoById(@Param('id', ParseIntPipe) id: number) {
    return this.eventoService.findEventoById(id);
  }

  @Delete(':id')
  eliminarEvento(@Param('id', ParseIntPipe) id: number) {
    return this.eventoService.eliminarEvento(id);
  }
}
