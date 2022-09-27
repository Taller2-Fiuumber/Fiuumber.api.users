import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { GetUsers, GetVehicles, GetDriverVehicles, CreateVehicle } from './src/controllers/user_controller';
import { CONFIG } from './config';

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/users', GetUsers);

app.post('/api/vehicle', CreateVehicle);

app.get('/api/vehicles', GetVehicles);

app.get('/api/driver-vehicles', GetDriverVehicles);

app.get('/', async (req: Request, res: Response) => res.send("Fiuumber Server :)"));


app.listen(CONFIG.app.port, () => {
  console.log("Cambio?");
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});
