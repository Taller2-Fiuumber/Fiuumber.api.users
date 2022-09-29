import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as controller from './src/controllers/user_controller';
import { CONFIG } from './config';
import bodyParser from "body-parser";

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(bodyParser.json())

app.use(cors(corsOptions));

app.get('/api/vehicles', controller.GetVehicles);

app.post('/api/vehicle', controller.CreateVehicle);

app.put('/api/vehicle', controller.UpdateVehicle);

app.get('/api/users', controller.GetUsers);

app.get('/api/user', controller.GetUser);

app.get('/api/passengers', controller.GetPassengers);

app.get('/api/passenger', controller.GetPassenger);

app.get('/api/drivers', controller.GetDrivers);

app.get('/api/driver', controller.GetDriver);

app.post('/api/driver', controller.CreateDriver);

app.post('/api/passenger', controller.CreatePassenger);

app.put('/api/driver', controller.UpdateDriver);

app.put('/api/passenger', controller.UpdatePassenger);

app.get('/', async (req: Request, res: Response) => res.send("Fiuumber Server :)"));

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});
