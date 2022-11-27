import { Column, Entity, EntitySchema, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Review from "./Review";

// module.exports = new EntitySchema({
//   name: "City",
//   columns: {
//     id: { primary: true, type: "int", generated: true },
//     name: {
//       type: "text",
//       unique: true,
//     },
//   },
// });

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ nullable: true })
  role: string;

  @OneToMany(() => Review, review => review.user)
  reviews: Review[];
}

export default User;
