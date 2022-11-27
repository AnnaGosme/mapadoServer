import {
  Column,
  Entity,
  EntitySchema,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
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
class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Review, (review) => review.city)
  reviews: Review[];
}

export default City;
