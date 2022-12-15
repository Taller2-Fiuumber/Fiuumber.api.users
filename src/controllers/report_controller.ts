import { Request, Response } from "express";
import * as service from "../services/report-service";

export const GetReports = async (req: Request, res: Response) => {
    try {
      const body = await service.getReports();
      res.json(body).status(200);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  export const GetReportByDriverId = async (req: Request, res: Response) => {
    try {
      const userId = Number.parseInt(req.params.id.toString());
      const body = await service.getReportByDriverId(userId);
      res.json(body).status(200);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  export const GetReportByPassengerId = async (req: Request, res: Response) => {
    try {
      const userId = Number.parseInt(req.params.id.toString());
      const body = await service.getReportByPassengerId(userId);
      res.json(body).status(200);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  export const CreateReport = async (req: Request, res: Response) => {
    try {
      const {
        driverId,
        passengerId,
        reason
      } = req.body;
      const body = await service.createReport(
        driverId,
        passengerId,
        reason
      );
      res.json(body).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };
  
  export const GetAmountOfReports = async (req: Request, res: Response) => {
    try {
        const userId = Number.parseInt(req.params.id.toString());
        const n = await service.getAmountOfReports(userId);
      res.json({ amount: n }).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };