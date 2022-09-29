import { Request, Response } from "express";
import * as service from "../services/user-service";

export const GetVehicles = async (req: Request, res: Response) => {
  try {
    const body = await service.getVehicles();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const CreateVehicle = async (req: Request, res: Response) => {
  try {
    const { brand, model, image } = req.body
    const body = await service.createVehicle(brand, model, image)
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const UpdateVehicle = async (req: Request, res: Response) => {
  try {
    const { id, brand, model, image } = req.body
    const body = await service.updateVehicle(id, brand, model, image)
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
    const {id} = req.body
    const body = await service.getUser(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const CreatePassenger = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, adress, privateKey} = req.body
    const body = await service.createPassenger(email, firstName, lastName, adress, privateKey);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetPassenger = async (req: Request, res: Response) => {
  try {
    const {userId} = req.body
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
    const { userId, email, firstName, lastName, adress, privateKey} = req.body;
    const body = await service.updatePassenger(userId, email, firstName, lastName, adress, privateKey);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const CreateDriver = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, adress, privateKey, domain, modelYear, colorName, brand, model, image} = req.body;
    const body = await service.createDriver(email, firstName, lastName, adress, privateKey, domain, modelYear, colorName, brand, model, image);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetDriver = async (req: Request, res: Response) => {
  try {
    const {userId} = req.body
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
    const { userId, email, firstName, lastName, adress, privateKey, domain, modelYear, colorName, brand, model, image} = req.body;
    const body = await service.updateDriver(userId, email, firstName, lastName, adress, privateKey, domain, modelYear, colorName, brand, model, image);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};
