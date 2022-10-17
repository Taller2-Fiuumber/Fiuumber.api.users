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

app.get('/api/users-service/vehicles', controller.GetVehicles);

app.post('/api/users-service/vehicle', controller.CreateVehicle);

app.put('/api/users-service/vehicle', controller.UpdateVehicle);

app.get('/api/users-service/users', controller.GetUsers);

app.get('/api/users-service/users/:id', controller.GetUser);

app.get('/api/users-service/login', controller.GetUserLogin);

app.get('/api/users-service/passengers', controller.GetPassengers);

app.get('/api/users-service/passenger', controller.GetPassenger);

app.get('/api/users-service/drivers', controller.GetDrivers);

app.get('/api/users-service/driver', controller.GetDriver);

app.post('/api/users-service/driver', controller.CreateDriver);

app.post('/api/users-service/passenger', controller.CreatePassenger);

app.put('/api/users-service/driver', controller.UpdateDriver);

app.put('/api/users-service/passenger', controller.UpdatePassenger);

app.get('/', async (req: Request, res: Response) => res.send("Fiuumber Server :)"));

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});
