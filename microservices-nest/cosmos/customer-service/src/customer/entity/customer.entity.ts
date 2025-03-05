import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false })
  name: string;

  @Column({nullable: false })
  email: string;

  @Column({nullable: true })
  address: string;
}
