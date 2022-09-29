import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import {GetVehicles, CreateVehicle } from './src/controllers/user_controller';
import { CONFIG } from './config';
import bodyParser from "body-parser";

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(bodyParser.json())

app.use(cors(corsOptions));

app.post('/api/vehicle', CreateVehicle);

app.get('/api/vehicles', GetVehicles);

app.get('/', async (req: Request, res: Response) => res.send("Fiuumber Server :)"));


app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});
