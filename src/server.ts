import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import { router } from "./routes"

import './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log("server is running in 3000 port");
});
