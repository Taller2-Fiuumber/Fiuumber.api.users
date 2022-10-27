import { PrismaClient, User, Passenger, Vehicle, Driver } from "@prisma/client";

const prisma = new PrismaClient();

export const getVehicles = async (): Promise<Vehicle[]> => {
  return await prisma.vehicle.findMany();
};

export const getVehicle = async (id: number): Promise<Vehicle> => {
  return await prisma.vehicle.findUniqueOrThrow({
    where: {
      id,
    },
  });

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

export const deleteVehicle = (
  id: number,
): Promise<Vehicle> => {
  const vehicle = prisma.vehicle.delete({
    where: {
      id,
    }
  });
  return vehicle;
};

export const getUserById = async (id: number): Promise<User> => {
  return await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
        email: email,
    },
  });
};

export const getUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const deleteUserById = (
  id: number,
): Promise<User> => {
  const user = prisma.user.delete({
    where: {
      id,
    }
  });
  return user;
};


export const getPassengers = async (): Promise<Passenger[]> => {
  return await prisma.passenger.findMany({include: {user: true,},});
};

export const getDrivers = async (): Promise<Driver[]> => {
  return await prisma.driver.findMany();
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
  username: string,
  password: string,
  adress: string,
  walletPrivateKey: string,
  domain: string,
  modelYear: string,
  colorName: string,
  brand: string,
  model: string,
  image: string,
): Promise<Driver> => {
  const profile = "DRIVER";

  const driver = await prisma.driver.create({
    data: {
      user: {
        create: {
          email,
          firstName,
          lastName,
          username,
          password,
          adress,
          profile,
        },
      },
      wallet: {
        create: {
          walletPrivateKey,
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

  return driver;
};

export const createPassenger = (
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  adress: string,
  walletPrivateKey:string
): Promise<Passenger> => {
  const profile = "PASSENGER";

  const passenger = prisma.passenger.create({
    data: {
      user: {
        create: {
          email,
          firstName,
          lastName,
          adress,
          password,
          username,
          profile,
        },
      },
      wallet: {
        create: {
          walletPrivateKey,
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
  domain: string,
  modelYear: string,
  colorName: string,
  brand: string,
  model: string,
  image: string,
  password: string,
  username: string,
  walletPrivateKey:string

): Promise<Driver> => {

  return prisma.driver.update({
    where: {
      userId,
    },
    data: {
      user: {
        update: {
          email,
          firstName,
          lastName,
          username,
          password,
          adress,
        },
      },
      wallet: {
        update: {
          walletPrivateKey,
        },
      },
      vehicle: {
        update: {
          domain,
          modelYear,
          colorName,
          vehicle: {
            update: {
              brand,
              model,
              image,
            },
          },
        },
      },
    },
  });

};

export const updatePassenger = (
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  adress: string,
  walletPrivateKey:string
): Promise<Passenger> => {

  return prisma.passenger.update({
    where: {
      userId: id,
    },
    data: {
      user: {
        update: {
          email,
          firstName,
          lastName,
          adress,
          password,
          username,
        },
      },
      wallet: {
        update: {
          walletPrivateKey,
        },
      },
    },
  });
};
