import express from 'express';
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

export default app;