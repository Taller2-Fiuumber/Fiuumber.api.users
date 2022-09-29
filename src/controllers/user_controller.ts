import { Request, Response } from "express";
import {createVehicle} from "../services/user-service";
import { PrismaClient } from "@prisma/client";

export const CreateVehicle = async (req: Request, res: Response) => {
  console.log("CreateVehicle request")
  console.log('Got body:', req.body.brand);
  try {
    const { brand, model, image } = req.body
    const body = await createVehicle(brand, model, image,)
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetVehicles = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const vehicles = await prisma.vehicle.findMany();
    res.json(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
};
