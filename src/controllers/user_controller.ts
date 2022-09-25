import { Request, Response } from "express";
import { getSomething } from "../services/my-service";

export const GetSomething = async (req: Request, res: Response) => {
  try {
    const something = await getSomething();
    res.status(200).send(something);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const getUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    const something = await getSomething();
    res.status(200).send(something);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const getUsers = async (req: Request, res: Response) => {
  try {
    const something = await getSomething();
    res.status(200).send(something);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const something = await getSomething();
    res.status(200).send(something);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const something = await getSomething();
    res.status(200).send(something);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUsers = async (req: Request, res: Response) => {
  try {
    const something = await getSomething();
    res.status(200).send(something);
  } catch (error) {
    res.status(500).send(error);
  }
};
