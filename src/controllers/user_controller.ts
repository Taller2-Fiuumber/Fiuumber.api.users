import { Request, Response } from "express";
import { getSomething } from "../services/my-service";
import { PrismaClient } from "@prisma/client";

export const GetSomething = async (req: Request, res: Response) => {
  try {
    const something = await getSomething();
    res.status(200).send(something);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const CreateVehicle = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();

    const { brand, model, image } = req.body

    const body = await prisma.vehicle.create({
      data: {
        brand,
        model,
        image,
      }
    })

    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetUsers = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    res.json(users).status(200);
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

export const GetDriverVehicles = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const vehicles = await prisma.driverVehicle.findMany();
    res.send(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
};




