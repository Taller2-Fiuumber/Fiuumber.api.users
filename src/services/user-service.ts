// import axios from 'axios';// For API consuming
import { PrismaClient, Vehicle} from "@prisma/client";

const prisma = new PrismaClient();

export const getVehicles = (): Promise<Vehicle[]> => {
  return prisma.vehicle.findMany();
};

export const createVehicle = (brand:string, model:string, image:string): Promise<Vehicle> => {
  const body = prisma.vehicle.create({
    data: {
      brand,
      model,
      image,
    }
  })

  return body;
};
