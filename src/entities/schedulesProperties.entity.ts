import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("shedules_users_properties")
class ShedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(
    () => Properties,
    (properties) => properties.shedules_users_properties
  )
  property: Properties[];

  @ManyToOne(() => User, (user) => user.shedules_users_properties)
  user: User[];
}

export { ShedulesUsersProperties };
