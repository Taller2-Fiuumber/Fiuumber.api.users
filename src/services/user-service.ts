import {
  User,
  Passenger,
  Vehicle,
  Driver,
  DriverVehicle,
  AccountType,
} from "@prisma/client";

import prisma from "../../client"

/*---------------------------------Vehicle-------------------------------------*/

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

export const getVehiclePage = async (
  skip: number,
  take: number
): Promise<Vehicle[]> => {
  return await prisma.vehicle.findMany({
    skip: skip,
    take: take,
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

export const deleteVehicle = (id: number): Promise<Vehicle> => {
  const vehicle = prisma.vehicle.delete({
    where: {
      id,
    },
  });
  return vehicle;
};

/*---------------------------Driver Vehicle-------------------------------------*/

export const getDriverVehicles = async (): Promise<DriverVehicle[]> => {
  return await prisma.driverVehicle.findMany({
    include: {
      vehicle: true,
    },
  });
};

export const getDriverVehicle = async (id: number): Promise<DriverVehicle> => {
  return await prisma.driverVehicle.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      vehicle: true,
    },
  });
};

export const getDriverVehiclePage = async (
  skip: number,
  take: number
): Promise<DriverVehicle[]> => {
  return await prisma.driverVehicle.findMany({
    skip: skip,
    take: take,
    include: {
      vehicle: true,
    },
  });
};

export const createDriverVehicle = async (
  domain: string,
  modelYear: string,
  colorName: string,
  brand: string,
  model: string,
  image: string
): Promise<DriverVehicle> => {
  const body = await prisma.driverVehicle.create({
    data: {
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
  });

  return body;
};

export const updateDriverVehicle = async (
  id: number,
  domain: string,
  modelYear: string,
  colorName: string,
  brand: string,
  model: string,
  image: string
): Promise<DriverVehicle> => {
  const body = await prisma.driverVehicle.update({
    where: {
      id,
    },
    data: {
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
  });

  return body;
};

export const deleteDriverVehicle = (id: number): Promise<DriverVehicle> => {
  const vehicle = prisma.driverVehicle.delete({
    where: {
      id,
    },
  });
  return vehicle;
};

/*--------------------------------------User-----------------------------------*/

export const getUserById = async (id: number): Promise<User> => {
  return await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
};

export const getLoginUserWithGoogle = async (id: number): Promise<User> => {
  const lastLogin = new Date(Date.now());
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      lastLogin,
    },
  });
};

export const checkUserExists = async (email: string): Promise<boolean> => {
  const response = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return response != null;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const lastLogin = new Date(Date.now());
  await prisma.user.update({
    where: {
      email,
    },
    data: {
      lastLogin,
    },
  });

  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const getUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const getUsersByAccountType = async (
  _accountType: string
): Promise<User[]> => {
  const accountType = AccountType[_accountType as keyof typeof AccountType];
  return await prisma.user.findMany({
    where: {
      accountType,
    },
  });
};

export const getUserPage = async (
  skip: number,
  take: number
): Promise<User[]> => {
  return await prisma.user.findMany({
    skip: skip,
    take: take,
  });
};

export const deleteUserById = (id: number): Promise<User> => {
  const user = prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};

/*---------------------------------Passenger-----------------------------------*/

export const amountOfPassengers = async (): Promise<number> => {
  return await prisma.passenger.count();
};

export const getPassengers = async (): Promise<Passenger[]> => {
  return await prisma.passenger.findMany({
    include: {
      user: true,
    },
  });
};

export const getPassenger = (userId: number): Promise<Passenger> => {
  return prisma.passenger.findUniqueOrThrow({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });
};

export const getPassengerPage = async (
  skip: number,
  take: number
): Promise<Passenger[]> => {
  return await prisma.passenger.findMany({
    skip: skip,
    take: take,
    include: {
      user: true,
    },
  });
};

export const createPassenger = (
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  address: string,
  walletAddress: string,
  accountType: AccountType
): Promise<Passenger> => {
  const profile = "PASSENGER";

  const passenger = prisma.passenger.create({
    data: {
      user: {
        create: {
          email,
          firstName,
          lastName,
          address,
          password,
          username,
          profile,
          walletAddress,
          accountType,
        },
      },
    },
    include: {
      user: true,
    },
  });

  return passenger;
};

export const updatePassenger = (
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  address: string,
  walletAddress: string
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
          address,
          password,
          username,
          walletAddress,
        },
      },
    },
  });
};

/*---------------------------------Driver--------------------------------------*/

export const amountOfDrivers = async (): Promise<number> => {
  return await prisma.driver.count();
};

export const getDrivers = async (): Promise<Driver[]> => {
  return await prisma.driver.findMany({
    include: {
      user: true,

      driverVehicle: {
        include: {
          vehicle: true,
        },
      },
    },
  });
};

export const getDriver = async (userId: number): Promise<Driver> => {
  const driver = await prisma.driver.findUniqueOrThrow({
    where: {
      userId,
    },
    include: {
      user: true,

      driverVehicle: {
        include: {
          vehicle: true,
        },
      },
    },
  });
  return driver;
};

export const getDriverPage = async (
  skip: number,
  take: number
): Promise<Driver[]> => {
  return await prisma.driver.findMany({
    skip: skip,
    take: take,
    include: {
      user: true,

      driverVehicle: {
        include: {
          vehicle: true,
        },
      },
    },
  });
};

export const createDriver = async (
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  address: string,
  walletAddress: string,
  domain: string,
  modelYear: string,
  colorName: string,
  brand: string,
  model: string,
  image: string,
  accountType: AccountType
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
          address,
          profile,
          walletAddress,
          accountType,
        },
      },
      driverVehicle: {
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
    include: {
      user: true,
      driverVehicle: {
        include: {
          vehicle: true,
        },
      },
    },
  });

  return driver;
};

export const updateDriver = (
  userId: number,
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  address: string,
  walletAddress: string,
  domain: string,
  modelYear: string,
  colorName: string,
  brand: string,
  model: string,
  image: string
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
          address,
          walletAddress,
        },
      },
      driverVehicle: {
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

export const setNotificationsToken = (userId: number, token: string) => {
  return prisma.user.update({
    where: { id: userId },
    data: { notificationsToken: token },
  });
};

export const getAmountOfLoginsByNumberOfDays = async (
  date: Date,
  numberOfDays: number
): Promise<{ key: string; value: number }[]> => {
  const dict = [];
  for (let i = 0; i < numberOfDays; i++) {
    date.setDate(date.getDate() - 1);
    const date1 = new Date();
    const date2 = new Date();

    date1.setDate(date.getDate());
    date2.setDate(date.getDate());

    date1.setUTCHours(0, 0, 0, 0);
    date2.setUTCHours(23, 59, 59, 999);

    const aggregations = await prisma.user.aggregate({
      _count: {
        id: true,
      },
      where: {
        accountType: "EMAIL",
        lastLogin: {
          lte: date2,
          gte: date1,
        },
      },
    });
    dict.push({
      key: date.toLocaleDateString("en-UK"),
      value: aggregations._count.id,
    });
  }
  return dict;
};

export const getAmountOfSignInByNumberOfDays = async (
  date: Date,
  numberOfDays: number
): Promise<{ key: string; value: number }[]> => {
  const dict = [];
  for (let i = 0; i < numberOfDays; i++) {
    date.setDate(date.getDate() - 1);
    const date1 = new Date();
    const date2 = new Date();

    date1.setDate(date.getDate());
    date2.setDate(date.getDate());

    date1.setUTCHours(0, 0, 0, 0);
    date2.setUTCHours(23, 59, 59, 999);

    const aggregations = await prisma.user.aggregate({
      _count: {
        id: true,
      },
      where: {
        accountType: "EMAIL",
        createdAt: {
          lte: date2,
          gte: date1,
        },
      },
    });
    dict.push({
      key: date.toLocaleDateString("en-UK"),
      value: aggregations._count.id,
    });
  }
  return dict;
};

export const getAmountOfLoginsByNumberOfDaysGoogle = async (
  date: Date,
  numberOfDays: number
): Promise<{ key: string; value: number }[]> => {
  const dict = [];
  for (let i = 0; i < numberOfDays; i++) {
    date.setDate(date.getDate() - 1);
    const date1 = new Date();
    const date2 = new Date();

    date1.setDate(date.getDate());
    date2.setDate(date.getDate());

    date1.setUTCHours(0, 0, 0, 0);
    date2.setUTCHours(23, 59, 59, 999);

    const aggregations = await prisma.user.aggregate({
      _count: {
        id: true,
      },
      where: {
        accountType: "GOOGLE",
        lastLogin: {
          lte: date2,
          gte: date1,
        },
      },
    });
    dict.push({
      key: date.toLocaleDateString("en-UK"),
      value: aggregations._count.id,
    });
  }
  return dict;
};
  /* istanbul ignore next */
export const getAmountOfSignInByNumberOfDaysGoogle = async (
  date: Date,
  numberOfDays: number
): Promise<{ key: string; value: number }[]> => {
  const dict = [];
  for (let i = 0; i < numberOfDays; i++) {
    date.setDate(date.getDate() - 1);
    const date1 = new Date();
    const date2 = new Date();

    date1.setDate(date.getDate());
    date2.setDate(date.getDate());

    date1.setUTCHours(0, 0, 0, 0);
    date2.setUTCHours(23, 59, 59, 999);

    const aggregations = await prisma.user.aggregate({
      _count: {
        id: true,
      },
      where: {
        accountType: "GOOGLE",
        createdAt: {
          lte: date2,
          gte: date1,
        },
      },
    });
    dict.push({
      key: date.toLocaleDateString("en-UK"),
      value: aggregations._count.id,
    });
  }
  return dict;
};
