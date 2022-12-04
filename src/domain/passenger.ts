import { User } from "./user";

export class Passenger extends User {
  profile: string;

  constructor(
    userId: number,
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    password: string,
    username: string,
    walletAddress: string,
    createdAt: Date,
    updatedAt: Date,
    lastLogin: Date,
    accountType: string
  ) {
    super(
      userId,
      email,
      firstName,
      lastName,
      address,
      password,
      username,
      walletAddress,
      createdAt,
      updatedAt,
      lastLogin,
      accountType
    );
    this.profile = "passenger";
  }
}
