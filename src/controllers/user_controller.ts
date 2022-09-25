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

export const GetUsers = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};
