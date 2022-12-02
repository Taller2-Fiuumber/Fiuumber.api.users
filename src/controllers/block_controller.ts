import { Request, Response } from "express";
import * as service from "../services/block-service";
/*--------------------------------- Users--------------------------------------*/

export const BlockStatusUserById = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.blockUserById(
      id
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const UnblockUserById = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.unblockUserById(
      id
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAmountOfBlockedUsers = async (req: Request, res: Response) => {
  try {
    const body = await service.getAmountOfBlockedUsers();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAmountOfBlockedDrivers = async (req: Request, res: Response) => {
  try {
    const body = await service.getAmountOfBlockedDrivers();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAmountOfBlockedPassengers = async (req: Request, res: Response) => {
  try {
    const body = await service.getAmountOfBlockedUsers();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};
