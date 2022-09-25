import { User } from './user';
import { Wallet } from './wallet';
import { DriverVehicle } from './driver_vehicle';

export class Driver extends User {
  profile: string;
  wallet: Wallet;
  vehicle: DriverVehicle;

  constructor(id: number, email: string, firstName: string, lastName: string, location: string, wallet: Wallet, vehicle: DriverVehicle) {
    super(id, email, firstName, lastName, location);
    this.profile = "driver";
    this.wallet = wallet;
    this.vehicle = vehicle;
  }
}
