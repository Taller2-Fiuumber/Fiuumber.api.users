import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as user_controller from './src/controllers/user_controller';
import * as administrator_controller from './src/controllers/administrator_controller';
import * as block_controller from './src/controllers/block_controller';
import * as report_controller from './src/controllers/report_controller';


import { CONFIG } from './config';
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './public/swagger.json';

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

app.get('/api/users-service/administrators/count', administrator_controller.GetAmountOfAdministrators);

app.get('/api/users-service/administrator', administrator_controller.GetAdministrators);

app.get('/api/users-service/administrator/:id', administrator_controller.GetAdministrator);

app.post('/api/users-service/administrator', administrator_controller.CreateAdministrator);

app.put('/api/users-service/administrator', administrator_controller.UpdateAdministrator);

app.delete('/api/users-service/administrator/:id', administrator_controller.DeleteAdministrator);

app.get('/api/users-service/administrator/page/:skip&:take', administrator_controller.GetAdministratorPage);

app.get('/api/users-service/administrators/login', administrator_controller.GetAdministratorLogin);

// DriverVehicle

app.get('/api/users-service/driver-vehicle', user_controller.GetDriverVehicles);

app.get('/api/users-service/driver-vehicle/:id', user_controller.GetDriverVehicle);

app.post('/api/users-service/driver-vehicle', user_controller.CreateDriverVehicle);

app.put('/api/users-service/driver-vehicle', user_controller.UpdateDriverVehicle);

app.put('/api/users-service/driver-vehicle', user_controller.UpdateDriverVehicle);

app.delete('/api/users-service/driver-vehicle/:id', user_controller.DeleteDriverVehicle);

app.get('/api/users-service/driver-vehicle/page/:skip&:take', user_controller.GetDriverVehiclePage);

// User

app.get('/api/users-service/user', user_controller.GetUsers);

app.get('/api/users-service/user/:id', user_controller.GetUser);

app.get('/api/users-service/users/login', user_controller.GetUserLogin);

app.get('/api/users-service/users/loginGoogle', user_controller.GetUserLoginGoogle);

app.delete('/api/users-service/user/:id', user_controller.DeleteUser);

app.get('/api/users-service/user/page/:skip&:take', user_controller.GetUserPage);

app.get('/api/users-service/user/check-if-exists/:email', user_controller.CheckUserExists);

app.get('/api/users-service/users/:accountType', user_controller.GetUsersByAccountType);

// Blocked User

app.get('/api/users-service/user/blocked/amount', block_controller.GetAmountOfBlockedUsers);

app.get('/api/users-service/user/driver/blocked/amount', block_controller.GetAmountOfBlockedDrivers);

app.get('/api/users-service/user/passenger/blocked/amount', block_controller.GetAmountOfBlockedPassengers);


app.post('/api/users-service/user/:id/blocked', block_controller.BlockStatusUserById);

app.delete('/api/users-service/user/:id/blocked', block_controller.UnblockUserById);

// Passenger

app.get('/api/users-service/passengers/count', user_controller.GetAmountOfPassengers);

app.get('/api/users-service/passenger', user_controller.GetPassengers);

app.get('/api/users-service/passenger/:id', user_controller.GetPassenger);

app.post('/api/users-service/passenger', user_controller.CreatePassenger);

app.put('/api/users-service/passenger', user_controller.UpdatePassenger);

app.put('/api/users-service/passenger/edit', user_controller.UpdatePassengerWithoutPassword);

app.get('/api/users-service/passenger/page/:skip&:take', user_controller.GetPassengerPage);

// Driver

app.get('/api/users-service/drivers/count', user_controller.GetAmountOfDriver);

app.get('/api/users-service/driver', user_controller.GetDrivers);

app.get('/api/users-service/driver/:id', user_controller.GetDriver);

app.post('/api/users-service/driver', user_controller.CreateDriver);

app.put('/api/users-service/driver', user_controller.UpdateDriver);

app.put('/api/users-service/driver/edit', user_controller.UpdateDriverWithoutPassword);

app.get('/api/users-service/driver/page/:skip&:take', user_controller.GetDriverPage);

// Metrics

app.get('/api/users-service/users/logIn/count-per-day-last-days', user_controller.GetAmountOfLoginsByNumberOfDays);

app.get('/api/users-service/users/signIn/count-per-day-last-days', user_controller.GetAmountOfSignInByNumberOfDays);

app.get('/api/users-service/users/logInGoogle/count-per-day-last-days', user_controller.GetAmountOfLoginsByNumberOfDaysGoogle);

app.get('/api/users-service/users/signInGoogle/count-per-day-last-days', user_controller.GetAmountOfSignInByNumberOfDaysGoogle);


// Listening...

app.post('/api/users-service/user/:id/notifications-token', user_controller.SetNotificationsToken);

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});

// Report driver

app.get('/api/users-service/report', report_controller.GetReports)

app.get('/api/users-service/report/driver/:id', report_controller.GetReportByDriverId)

app.get('/api/users-service/report/passenger/:id', report_controller.GetReportByPassengerId)

app.get('/api/users-service/report/driver/amount/:id', report_controller.GetAmountOfReports)

app.post('/api/users-service/report', report_controller.CreateReport)



