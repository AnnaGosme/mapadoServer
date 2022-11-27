import {
  Column,
  Entity,
  EntitySchema,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import City from "./City";
import User from "./User";

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
class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => City, city => city.reviews)
  city: City

  @Column({ nullable: true, length: 100 })
  title: string;

  @Column({ nullable: true, length: 500 })
  comment: string;

  @ManyToMany(() => User, (user) => user.reviews)
  user: User[];
}

export default Review;
