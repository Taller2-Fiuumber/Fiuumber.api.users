import { User } from "@prisma/client";
import { Request, Response } from "express";
import * as service from "../services/user-service";
import * as paymentsService from "../services/payments-service";
import { check, encrypt } from "../utils/useful-functions";

/*---------------------------------Vehicle-------------------------------------*/

export const GetVehicles = async (req: Request, res: Response) => {
  try {
    const body = await service.getVehicles();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetVehicle = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.getVehicle(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const CreateVehicle = async (req: Request, res: Response) => {
  try {
    const { brand, model, image } = req.body;
    const body = await service.createVehicle(brand, model, image);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const UpdateVehicle = async (req: Request, res: Response) => {
  try {
    const { id, brand, model, image } = req.body;
    const body = await service.updateVehicle(id, brand, model, image);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const DeleteVehicle = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.deleteVehicle(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetVehiclePage = async (req: Request, res: Response) => {
  try {
    const skip = Number.parseInt(req.params.skip.toString());
    const take = Number.parseInt(req.params.take.toString());

    const body = await service.getVehiclePage(skip, take);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

/*---------------------------------Driver Vehicles-----------------------------*/

export const GetDriverVehicles = async (req: Request, res: Response) => {
  try {
    const body = await service.getDriverVehicles();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetDriverVehicle = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.getDriverVehicle(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const CreateDriverVehicle = async (req: Request, res: Response) => {
  try {
    const { domain, modelYear, colorName, brand, model, image } = req.body;
    const body = await service.createDriverVehicle(
      domain,
      modelYear,
      colorName,
      brand,
      model,
      image
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const UpdateDriverVehicle = async (req: Request, res: Response) => {
  try {
    const { id, domain, modelYear, colorName, brand, model, image } = req.body;
    const body = await service.updateDriverVehicle(
      id,
      domain,
      modelYear,
      colorName,
      brand,
      model,
      image
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const DeleteDriverVehicle = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.deleteDriverVehicle(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetDriverVehiclePage = async (req: Request, res: Response) => {
  try {
    const skip = Number.parseInt(req.params.skip.toString());
    const take = Number.parseInt(req.params.take.toString());

    const body = await service.getDriverVehiclePage(skip, take);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

/*--------------------------------- Users--------------------------------------*/

export const GetUsers = async (req: Request, res: Response) => {
  try {
    const body = await service.getUsers();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetUser = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.getUserById(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetUserLogin = async (req: Request, res: Response) => {
  console.log("req query", req.query);

  if (!req.query.email || !req.query.password) res.status(500).send();
  try {
    const email: string = req.query.email?.toString() || "";
    const password: string = req.query.password?.toString() || "";

    const user: User | null = await service.getUserByEmail(email);

    if (!user || !(await check(password, user?.password))) {
      res.status(401).send();
      return;
    }

    res.json(user).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.deleteUserById(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetUserPage = async (req: Request, res: Response) => {
  try {
    const skip = Number.parseInt(req.params.skip.toString());
    const take = Number.parseInt(req.params.take.toString());

    const body = await service.getUserPage(skip, take);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetUserLoginGoogle = async (req: Request, res: Response) => {
  console.log("req query", req.query);

  if (!req.query.id) {
    res.status(500).send();
  } else {
    try {
      const user: User | null = await service.getLoginUserWithGoogle(
        Number.parseInt(req.query.id.toString())
      );

      res.json(user).status(200);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

/*---------------------------------Passenger-----------------------------------*/

export const GetAmountOfPassengers = async (req: Request, res: Response) => {
  try {
    const n = await service.amountOfPassengers();
    res.json({ amount: n }).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const CreatePassenger = async (req: Request, res: Response) => {
  try {
    const {
      email,
      firstName,
      lastName,
      address,
      password,
      username,
      accountType,
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const walletAddress: string = await paymentsService.createWallet();
    const body = await service.createPassenger(
      email,
      firstName,
      lastName,
      username,
      encryptedPassword,
      address,
      walletAddress,
      accountType
    );
    res.json(body).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const GetPassenger = async (req: Request, res: Response) => {
  try {
    const userId = Number.parseInt(req.params.id.toString());
    const body = await service.getPassenger(userId);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetPassengers = async (req: Request, res: Response) => {
  try {
    const body = await service.getPassengers();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const UpdatePassenger = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      email,
      firstName,
      lastName,
      username,
      password,
      address,
      walletAddress,
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const body = await service.updatePassenger(
      userId,
      email,
      firstName,
      lastName,
      username,
      encryptedPassword,
      address,
      walletAddress
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetPassengerPage = async (req: Request, res: Response) => {
  try {
    const skip = Number.parseInt(req.params.skip.toString());
    const take = Number.parseInt(req.params.take.toString());

    const body = await service.getPassengerPage(skip, take);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

/*---------------------------------Driver--------------------------------------*/

export const GetAmountOfDriver = async (req: Request, res: Response) => {
  try {
    const n = await service.amountOfDrivers();
    res.json({ amount: n }).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const CreateDriver = async (req: Request, res: Response) => {
  try {
    const {
      email,
      firstName,
      lastName,
      username,
      password,
      address,
      vehicle,
      accountType,
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const walletAddress: string = await paymentsService.createWallet();
    const body = await service.createDriver(
      email,
      firstName,
      lastName,
      username,
      encryptedPassword,
      address,
      walletAddress,
      vehicle.domain,
      vehicle.modelYear,
      vehicle.colorName,
      vehicle.vehicle.brand,
      vehicle.vehicle.model,
      vehicle.vehicle.image,
      accountType
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetDriver = async (req: Request, res: Response) => {
  try {
    const userId = Number.parseInt(req.params.id.toString());
    const body = await service.getDriver(userId);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetDrivers = async (req: Request, res: Response) => {
  try {
    const body = await service.getDrivers();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const UpdateDriver = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      email,
      firstName,
      lastName,
      username,
      password,
      address,
      walletAddress,
      vehicle,
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const body = await service.updateDriver(
      userId,
      email,
      firstName,
      lastName,
      username,
      encryptedPassword,
      address,
      walletAddress,
      vehicle.domain,
      vehicle.modelYear,
      vehicle.colorName,
      vehicle.vehicle.brand,
      vehicle.vehicle.model,
      vehicle.vehicle.image
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetDriverPage = async (req: Request, res: Response) => {
  try {
    const skip = Number.parseInt(req.params.skip.toString());
    const take = Number.parseInt(req.params.take.toString());

    const body = await service.getDriverPage(skip, take);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const SetNotificationsToken = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    const userId = Number.parseInt(req.params.id.toString());

    if (!token) {
      res.status(400).send({ message: "A token must be provided" });
      return;
    }

    const body = await service.setNotificationsToken(userId, token);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

/*---------------------------------Metrics-----------------------------------*/

export const GetAmountOfLoginsByNumberOfDays = async (
  req: Request,
  res: Response
) => {
  try {
    let date_f = new Date();
    const day_string = req.query.day?.toString();
    if (day_string != undefined) {
      const [day, month, year] = day_string.split("/");
      const day_united_states_of_america = [month, day, year].join("/");
      date_f = new Date(day_united_states_of_america);
    } else {
      date_f = new Date(Date.now());
    }
    const number_of_days = Number.parseInt(
      req.query.numberOfDays?.toString() || "7"
    );
    const body = await service.getAmountOfLoginsByNumberOfDays(
      date_f,
      number_of_days
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAmountOfSignInByNumberOfDays = async (
  req: Request,
  res: Response
) => {
  try {
    let date_f = new Date();
    const day_string = req.query.day?.toString();
    if (day_string != undefined) {
      const [day, month, year] = day_string.split("/");
      const day_united_states_of_america = [month, day, year].join("/");
      date_f = new Date(day_united_states_of_america);
    } else {
      date_f = new Date(Date.now());
    }

    const number_of_days = Number.parseInt(
      req.query.numberOfDays?.toString() || "7"
    );
    const body = await service.getAmountOfSignInByNumberOfDays(
      date_f,
      number_of_days
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAmountOfLoginsByNumberOfDaysGoogle = async (
  req: Request,
  res: Response
) => {
  try {
    let date_f = new Date();
    const day_string = req.query.day?.toString();
    if (day_string != undefined) {
      const [day, month, year] = day_string.split("/");
      const day_united_states_of_america = [month, day, year].join("/");
      date_f = new Date(day_united_states_of_america);
    } else {
      date_f = new Date(Date.now());
    }
    const number_of_days = Number.parseInt(
      req.query.numberOfDays?.toString() || "7"
    );
    const body = await service.getAmountOfLoginsByNumberOfDaysGoogle(
      date_f,
      number_of_days
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAmountOfSignInByNumberOfDaysGoogle = async (
  req: Request,
  res: Response
) => {
  try {
    let date_f = new Date();
    const day_string = req.query.day?.toString();
    if (day_string != undefined) {
      const [day, month, year] = day_string.split("/");
      const day_united_states_of_america = [month, day, year].join("/");
      date_f = new Date(day_united_states_of_america);
    } else {
      date_f = new Date(Date.now());
    }

    const number_of_days = Number.parseInt(
      req.query.numberOfDays?.toString() || "7"
    );
    const body = await service.getAmountOfSignInByNumberOfDaysGoogle(
      date_f,
      number_of_days
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};
