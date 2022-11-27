import datasource from "../db";
import User from "../entity/User";
import City from "../entity/City";
import Review from "../entity/Review";
import { IController } from "../types/IController";

const CityController: IController = {
  create: async (req, res) => {
    const { id, name, reviews } = req.body;

    if (name.length > 100 || name.length === 0) {
      return res.status(422).send("name must be between 1 and 100 characters");
    }

    try {
      const created: {} = await datasource
        .getRepository(City)
        .save({ id, name, reviews });
      res.status(201).send(created);
    } catch (err) {
      console.error(err);
      res.send(err);
    }
  },
  read: async (req, res) => {
    try {
      const cities = await datasource.getRepository(City).find();
      res.send(cities.map((city) => city));
    } catch (err) {
      console.error(err);
      res.send("error fetching cities");
    }
  },
};

export default CityController;
