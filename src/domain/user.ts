export abstract class User {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  blocked: boolean;
  username: string;
  password: string;
  address: string;
  walletAddress: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  accountType: string;

  abstract profile: string;

  constructor(
    userId: number,
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    password: string,
    username: string,
<<<<<<< HEAD
    privateKey: string,
    createdAt: Date,
    updatedAt: Date,
    lastLogin: Date,
    accountType: string,
=======
    walletAddress: string,
>>>>>>> main
  ) {
    this.userId = userId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.blocked = false;
    this.password = password;
    this.username = username;
<<<<<<< HEAD
    this.privateKey = privateKey;
    this.lastLogin = lastLogin;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.accountType = accountType;
=======
    this.walletAddress = walletAddress;
>>>>>>> main

  }
}
