import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evento } from 'src/evento/evento.entity/evento.entity';

@Entity()
export class Ponente {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  cedula: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  tipoPonente: string; //Interno, Invitado

  @Column()
  especialidad: string;

  @OneToMany(() => Evento, (evento) => evento.ponente)
  eventos: Evento[];
}
