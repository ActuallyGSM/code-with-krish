import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DispatchLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicle_number: string;

  @Column()
  city: string;
}