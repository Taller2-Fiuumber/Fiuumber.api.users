import { Administrator } from "@prisma/client";
import prisma from "../../client"

export const amountOfAdministrators = async (): Promise<number> => {
  return await prisma.administrator.count();
};

export const getAdministratorById = async (
  id: number
): Promise<Administrator | null> => {
  return await prisma.administrator.findUnique({
    where: {
      id: id,
    },
  });
};

export const getAdministratorByEmail = async (
  email: string
): Promise<Administrator | null> => {
  return await prisma.administrator.findUnique({
    where: {
      email: email,
    },
  });
};

export const getAdministrators = async (): Promise<Administrator[]> => {
  return await prisma.administrator.findMany();
};

export const createAdministrator = (
  email: string,
  firstName: string,
  lastName: string,
  password: string
): Promise<Administrator> => {
  const administrator = prisma.administrator.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });
  return administrator;
};

export const updateAdministrator = (
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  password: string
): Promise<Administrator> => {
  const administrator = prisma.administrator.update({
    where: {
      id,
    },
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });
  return administrator;
};

export const deleteAdministrator = (id: number): Promise<Administrator> => {
  const administrator = prisma.administrator.delete({
    where: {
      id,
    },
  });
  return administrator;
};

export const getAdministratorsPage = async (
  skip: number,
  take: number
): Promise<Administrator[]> => {
  return await prisma.administrator.findMany({
    skip: skip,
    take: take,
  });
};
