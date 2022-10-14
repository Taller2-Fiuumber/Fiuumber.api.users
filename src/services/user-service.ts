// import axios from 'axios';// For API consuming
import { PrismaClient, User, Passenger, Vehicle, Driver } from "@prisma/client";

const prisma = new PrismaClient();

export const getVehicles = async (): Promise<Vehicle[]> => {
  return await prisma.vehicle.findMany();
};

export const createVehicle = async (
  brand: string,
  model: string,
  image: string
): Promise<Vehicle> => {
  const body = await prisma.vehicle.create({
    data: {
      brand,
      model,
      image,
    },
  });

  return body;
};

export const updateVehicle = async (
  id: number,
  brand: string,
  model: string,
  image: string
): Promise<Vehicle> => {
  const body = await prisma.vehicle.update({
    where: {
      id,
    },
    data: {
      brand,
      model,
      image,
    },
  });

  return body;
};

export const getUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const getPassengers = async (): Promise<Passenger[]> => {
  return await prisma.passenger.findMany();
};

export const getDrivers = async (): Promise<Driver[]> => {
  return await prisma.driver.findMany();
};

export const getUser = async (id: number): Promise<User> => {
  return await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
};

export const getDriver = async (userId: number): Promise<Driver> => {
  return await prisma.driver.findUniqueOrThrow({
    where: {
      userId,
    },
  });
};

export const getPassenger = (userId: number): Promise<Passenger> => {
  return prisma.passenger.findUniqueOrThrow({
    where: {
      userId,
    },
  });
};

export const createDriver = async (
  email: string,
  firstName: string,
  lastName: string,
  adress: string,
  privateKey: string,
  domain: string,
  modelYear: string,
  colorName: string,
  brand: string,
  model: string,
  image: string
): Promise<Driver> => {
  const profile = "DRIVER";

  const passenger = await prisma.driver.create({
    data: {
      user: {
        create: {
          email,
          firstName,
          lastName,
          profile,
        },
      },
      wallet: {
        create: {
          adress,
          privateKey,
        },
      },
      vehicle: {
        create: {
          domain,
          modelYear,
          colorName,
          vehicle: {
            create: {
              brand,
              model,
              image,
            },
          },
        },
      },
    },
  });

  return passenger;
};

export const createPassenger = (
  email: string,
  firstName: string,
  lastName: string,
  adress: string,
  privateKey: string
): Promise<Passenger> => {
  const profile = "PASSENGER";

  const passenger = prisma.passenger.create({
    data: {
      user: {
        create: {
          email,
          firstName,
          lastName,
          profile,
        },
      },
      wallet: {
        create: {
          adress,
          privateKey,
        },
      },
    },
  });

  return passenger;
};

export const updateDriver = (
  userId: number,
  email: string,
  firstName: string,
  lastName: string,
  adress: string,
  privateKey: string,
  domain: string,
  modelYear: string,
  colorName: string,
  brand: string,
  model: string,
  image: string
): Promise<Driver> => {
  const profile = "DRIVER";

  const passenger = prisma.driver.update({
    where: {
      userId,
    },
    data: {
      user: {
        create: {
          email,
          firstName,
          lastName,
          profile,
        },
      },
      wallet: {
        create: {
          adress,
          privateKey,
        },
      },
      vehicle: {
        create: {
          domain,
          modelYear,
          colorName,
          vehicle: {
            create: {
              brand,
              model,
              image,
            },
          },
        },
      },
    },
  });

  return passenger;
};

export const updatePassenger = (
  userId: number,
  email: string,
  firstName: string,
  lastName: string,
  adress: string,
  privateKey: string
): Promise<Passenger> => {
  const profile = "PASSENGER";

  const passenger = prisma.passenger.update({
    where: {
      userId,
    },
    data: {
      user: {
        create: {
          email,
          firstName,
          lastName,
          profile,
        },
      },
      wallet: {
        create: {
          adress,
          privateKey,
        },
      },
    },
  });

  return passenger;
};
