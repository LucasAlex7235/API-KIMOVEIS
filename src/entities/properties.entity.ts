import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { ShedulesUsersProperties } from "./schedulesProperties.entity";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column()
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses)
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, (categories) => categories.properties)
  category: Categories;

  @OneToMany(
    () => ShedulesUsersProperties,
    (shedulesUsersProperties) => shedulesUsersProperties.property
  )
  shedules_users_properties: ShedulesUsersProperties[];
}

export { Properties };
