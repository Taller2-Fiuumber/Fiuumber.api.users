import { Report } from "@prisma/client";
import prisma from "../../client";

/*--------------------------------------User-----------------------------------*/

export const getReports = async (): Promise<Report[]> => {
  return await prisma.report.findMany();
};

export const getReportByDriverId = async (
  driverId: number
): Promise<Report[]> => {
  return await prisma.report.findMany({
    where: {
      driverId,
    },
  });
};

export const getReportByPassengerId = async (
  passengerId: number
): Promise<Report[]> => {
  return await prisma.report.findMany({
    where: {
      passengerId,
    },
  });
};

export const getAmountOfReports = async (driverId: number): Promise<number> => {
  const aggregations = await prisma.report.aggregate({
    _count: {
      id: true,
    },
    where: {
      driverId,
    },
  });

  return aggregations._count.id;
};

export const createReport = async (
  driverId: number,
  passengerId: number,
  reason: string
): Promise<Report> => {
  const body = await prisma.report.create({
    data: {
      driverId,
      passengerId,
      reason,
    },
  });

  return body;
};
