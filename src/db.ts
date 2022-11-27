import { DataSource } from "typeorm";
import City from "./entity/City";
import User from "./entity/User";
import Review from "./entity/Review";

export default new DataSource({
  type: "sqlite",
  database: "mapadodb.sqlite",
  synchronize: true,
  entities: [City, User, Review],
  logging: ["query", "error"],
});
