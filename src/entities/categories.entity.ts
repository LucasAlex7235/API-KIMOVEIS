import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties } from "./properties.entity";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Properties, (properties) => properties.categories)
  properties: Properties;
}

export { Categories };
