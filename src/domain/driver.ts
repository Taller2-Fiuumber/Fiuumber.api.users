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
    createdAt: Date,
    updatedAt: Date,
    lastLogin: Date,
    accountType: string,
  ) {
    super(id, email, firstName, lastName, address, password, username, wallet.walletPrivateKey, createdAt, updatedAt, lastLogin,accountType);
    this.profile = "driver";
    this.wallet = wallet;
    this.vehicle = vehicle;
  }
}
