import { User } from "./user";
import { Wallet } from "./wallet";
import { DriverVehicle } from "./driver_vehicle";

export class Driver extends User {
  profile: string;
  wallet: Wallet;
  vehicle: DriverVehicle;

  constructor(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    wallet: Wallet,
    vehicle: DriverVehicle,
    password: string,
    username: string,
    privateKey: string
  ) {
    super(id, email, firstName, lastName, address, password, username, privateKey);
    this.profile = "driver";
    this.wallet = wallet;
    this.vehicle = vehicle;
  }
}
