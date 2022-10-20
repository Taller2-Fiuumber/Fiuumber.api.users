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
    adress: string,
    wallet: Wallet,
    password: string,
    username: string,
    privateKey: string
  ) {
    super(userId, email, firstName, lastName, adress, password, username, privateKey);
    this.profile = "passenger";
    this.wallet = wallet;
  }
}
