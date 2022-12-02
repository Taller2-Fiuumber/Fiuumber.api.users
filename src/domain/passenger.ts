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
    privateKey: string,
    createdAt: Date,
    updatedAt: Date,
    lastLogin: Date
  ) {
    super(userId, email, firstName, lastName, address, password, username, privateKey, createdAt, updatedAt, lastLogin);
    this.profile = "passenger";
    this.wallet = wallet;
  }
}
