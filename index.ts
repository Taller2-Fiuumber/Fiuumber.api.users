import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as user_controller from './src/controllers/user_controller';
import * as administrator_controller from './src/controllers/administrator_controller';

import { CONFIG } from './config';
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './public/swagger.json';
import { DeleteUser } from './src/controllers/user_controller';

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(bodyParser.json())
app.use(cors(corsOptions));

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// root

app.get('/', async (req: Request, res: Response) => res.send("Fiuumber API Users"));

// Administrator

app.get('/api/users-service/administrator', administrator_controller.GetAdministrators);

app.get('/api/users-service/administrator/:id', administrator_controller.GetAdministrator);

app.post('/api/users-service/administrator', administrator_controller.CreateAdministrator);

app.put('/api/users-service/administrator', administrator_controller.UpdateAdministrator);

app.delete('/api/users-service/administrator/:id', administrator_controller.DeleteAdministrator);

// Vehicle

app.get('/api/users-service/vehicle', user_controller.GetVehicles);

app.get('/api/users-service/vehicle/:id', user_controller.GetVehicle);

app.post('/api/users-service/vehicle', user_controller.CreateVehicle);

app.put('/api/users-service/vehicle', user_controller.UpdateVehicle);

app.delete('/api/users-service/vehicle/:id', user_controller.DeleteVehicle);

// User

app.get('/api/users-service/user', user_controller.GetUsers);

app.get('/api/users-service/user/:id', user_controller.GetUser);

app.get('/api/users-service/login', user_controller.GetUserLogin);

app.delete('/api/users-service/user/:id', user_controller.DeleteUser);

// Passenger

app.get('/api/users-service/passenger', user_controller.GetPassengers);

app.get('/api/users-service/passenger/:id', user_controller.GetPassenger);

app.post('/api/users-service/passenger', user_controller.CreatePassenger);

app.put('/api/users-service/passenger', user_controller.UpdatePassenger);

// Driver

app.get('/api/users-service/driver', user_controller.GetDrivers);

app.get('/api/users-service/driver/:id', user_controller.GetDriver);

app.post('/api/users-service/driver', user_controller.CreateDriver);

app.put('/api/users-service/driver', user_controller.UpdateDriver);

// Listening...

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});
