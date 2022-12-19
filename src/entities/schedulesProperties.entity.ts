// import { hashSync } from "bcryptjs";
// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   BeforeInsert,
//   OneToOne,
// } from "typeorm";

// @Entity("shedules_users_properties")
// class ShedulesUsersProperties {
//   @PrimaryGeneratedColumn("uuid")
//   id: string;

//   @Column({ type: "date" })
//   date: string;

//   @Column({ type: "time"})
//   hour: string;

//   @OneToOne()
// //   @Column({ length: 120 })
// //   password: string;

// //   @Column()
// //   isAdm: boolean;

// //   @Column({ default: true, type: "boolean" })
// //   isActive: boolean;

// //   @CreateDateColumn()
// //   createdAt: Date;

// //   @CreateDateColumn()
// //   updatedAt: Date;

// //   @BeforeInsert()
// //   hashPassword() {
// //     this.password = hashSync(this.password, 10);
// //   }
// }

// export { ShedulesUsersProperties };
