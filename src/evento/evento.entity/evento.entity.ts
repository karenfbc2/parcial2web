import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Ponente } from 'src/ponente/ponente.entity/ponente.entity';
import { Auditorio } from 'src/auditorio/auditorio.entity/auditorio.entity';
import { Asistente } from 'src/asistente/asistente.entity/asistente.entity';


@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column({ type: 'date' })
  fecha: Date;

  @Column()
  duraciónHoras: number;

  @Column()
  estado: string; //Propuesto, Aprobado,Rechazado

  @ManyToOne(() => Ponente, (p) => p.eventos)
  ponente: Ponente;

  @ManyToOne(() => Auditorio, (a) => a.eventos)
  auditorio: Auditorio;

  @OneToMany(() => Asistente, (a) => a.evento)
  asistentes: Asistente[];
}
