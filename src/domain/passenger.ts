import { User } from "./user";
import { Wallet } from "./wallet";

export class Passenger extends User {
  profile: string;
  wallet: Wallet;

  constructor(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    location: string,
    wallet: Wallet
  ) {
    super(id, email, firstName, lastName, location);
    this.profile = "passenger";
    this.wallet = wallet;
  }
}
