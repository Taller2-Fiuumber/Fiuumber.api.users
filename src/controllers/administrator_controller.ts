import { Administrator } from "@prisma/client";
import { Request, Response } from "express";
import * as service from "../services/administrator-service";
import { check, encrypt } from "../utils/useful-functions";

export const GetAdministrators = async (req: Request, res: Response) => {
  try {
    const body = await service.getAdministrators();
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAdministrator = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.getAdministratorById(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAdministratorPage = async (req: Request, res: Response) => {
  try {
    const skip = Number.parseInt(req.params.skip.toString());
    const take = Number.parseInt(req.params.take.toString());

    const body = await service.getAdministratorsPage(skip, take);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetAdministratorLogin = async (req: Request, res: Response) => {
  if (!req.query.email || !req.query.password) res.status(500).send();
  try {
    const email: string = req.query.email?.toString() || '';
    const password: string = req.query.password?.toString() || '';

    const administrator: Administrator | null = await service.getAdministratorByEmail(email);

    if (!administrator || !(await check(password, administrator?.password))) {
      res.status(401).send();
      return;
    }

    res.json(administrator).status(200);

  } catch (error) {
    res.status(500).send(error);
  }
};

export const CreateAdministrator = async (req: Request, res: Response) => {
  try {
    const {
      email,
      firstName,
      lastName,
      password
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const body = await service.createAdministrator(email, firstName, lastName, encryptedPassword);
    res.json(body).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const UpdateAdministrator = async (req: Request, res: Response) => {
  try {
    const {
      id,
      email,
      firstName,
      lastName,
      password,
    } = req.body;
    const encryptedPassword: string = await encrypt(password);
    const body = await service.updateAdministrator(
      id,
      email,
      firstName,
      lastName,
      encryptedPassword
    );
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const DeleteAdministrator = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id.toString());
    const body = await service.deleteAdministrator(id);
    res.json(body).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};
