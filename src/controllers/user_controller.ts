import { User } from "@prisma/client";
import { Request, Response } from "express";
import * as service from "../services/user-service";
import { check, encrypt } from "../utils/useful-functions";

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
  if (!req.query.email || !req.query.password) res.status(500).send();
  try {
    const email: string = req.query.email?.toString() || '';
    const password: string = req.query.password?.toString() || '';

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

export const CreatePassenger = async (req: Request, res: Response) => {
  try {
    const {
      email,
      firstName,
      lastName,
      adress,
      password,
      username,
      privateKey
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const body = await service.createPassenger(email, firstName, lastName, username, encryptedPassword, adress, privateKey);
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
      adress,
      privateKey,
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const body = await service.updatePassenger(
      userId,
      email,
      firstName,
      lastName,
      username,
      encryptedPassword,
      adress,
      privateKey,
    );
    res.json(body).status(200);
  } catch (error) {
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
      adress,
      privateKey,
      domain,
      modelYear,
      colorName,
      brand,
      model,
      image,
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const body = await service.createDriver(
      email,
      firstName,
      lastName,
      username,
      encryptedPassword,
      adress,
      privateKey,
      domain,
      modelYear,
      colorName,
      brand,
      model,
      image,
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
      adress,
      wallet,
      domain,
      modelYear,
      colorName,
      brand,
      model,
      image,
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const body = await service.updateDriver(
      userId,
      email,
      firstName,
      lastName,
      username,
      encryptedPassword,
      adress,
      wallet.privateKey,
      domain,
      modelYear,
      colorName,
      brand,
      model,
      image,
    );
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

