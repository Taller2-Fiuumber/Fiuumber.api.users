import { PrismaClient, User} from "@prisma/client";
const prisma = new PrismaClient();

/*--------------------------------------User-----------------------------------*/

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
