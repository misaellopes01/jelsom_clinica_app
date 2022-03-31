import { Subscription } from '../../../modules/subscriptions/entities/Subscription';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;
  
  @Column()
  age: number;

  @Column()
  location: string;

  @Column()
  gender: string;

  @Column()
  phone: number;

  @Column()
  bi: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}
