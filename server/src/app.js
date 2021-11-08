import express, { json } from "express";
import cors from "cors";

import { router } from "./router.js";
import { sequelize } from "./database/index.js";

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

const app = express();

app.use(json())

app.use(cors(corsOptions));

app.use("/v1", router);

(async () => {
  await sequelize.sync().catch(err => console.log(err));
})();

export { app };