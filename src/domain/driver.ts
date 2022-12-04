import { User } from "./user";
import { DriverVehicle } from "./driver_vehicle";

export class Driver extends User {
  profile: string;
  vehicle: DriverVehicle;

  constructor(
    userId: number,
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    vehicle: DriverVehicle,
    password: string,
    username: string,
    walletAddress: string,

  ) {
    super(userId, email, firstName, lastName, address, password, username, walletAddress);
    this.profile = "driver";
    this.vehicle = vehicle;
  }
}
