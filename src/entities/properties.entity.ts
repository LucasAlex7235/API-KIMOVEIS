import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  sold: boolean;

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
  categories: Categories[];
}

export { Properties };
