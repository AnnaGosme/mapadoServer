import express from "express";
import cors from "cors";
import citiesController from "./controller/cities";
// import usersController from "./controller/users";

import datasource from "./db";

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/cities', citiesController.read);
app.post('/cities', citiesController.create);

const start = async () => {
  await datasource.initialize();

  app.listen(5001, () => {
    console.log("listening on port 5001");
  });
};

void start();
