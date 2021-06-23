import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import "express-async-errors"

import { router } from "./routes"

import './database';
import { errorHandling } from './middleware/errorHandling';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandling)

app.listen(3000, () => {
  console.log("server is running in 3000 port");
});
