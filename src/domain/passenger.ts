import { User } from "./user";
import { Wallet } from "./wallet";

export class Passenger extends User {
  profile: string;
  wallet: Wallet;

  constructor(
    userId: number,
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    wallet: Wallet,
    password: string,
    username: string,
    privateKey: string
  ) {
    super(userId, email, firstName, lastName, address, password, username, privateKey);
    this.profile = "passenger";
    this.wallet = wallet;
  }
}
