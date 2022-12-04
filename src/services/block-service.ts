import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

/*--------------------------------------User-----------------------------------*/

export const getAmountOfBlockedUsers = async (): Promise<number> => {
  const aggregations = await prisma.user.aggregate({
    _count: {
      id: true,
    },
    where: {
      blocked: true,
    },
  });

  return aggregations._count.id;
};

export const getAmountOfBlockedDrivers = async (): Promise<number> => {
  const aggregations = await prisma.user.aggregate({
    _count: {
      id: true,
    },
    where: {
      blocked: true,
      profile: "DRIVER",
    },
  });

  return aggregations._count.id;
};

export const getAmountOfBlockedPassengers = async (): Promise<number> => {
  const aggregations = await prisma.user.aggregate({
    _count: {
      id: true,
    },
    where: {
      blocked: true,
      profile: "PASSENGER",
    },
  });

  return aggregations._count.id;
};

export const blockUserById = async (id: number): Promise<User> => {
  const blocked = true;

  return prisma.user.update({
    where: {
      id,
    },
    data: {
      blocked,
    },
  });
};

export const unblockUserById = async (id: number): Promise<User> => {
  const blocked = false;

  return prisma.user.update({
    where: {
      id,
    },
    data: {
      blocked,
    },
  });
};
