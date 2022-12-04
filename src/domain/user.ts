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
  abstract profile: string;

  constructor(
    userId: number,
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    password: string,
    username: string,
    walletAddress: string,
  ) {
    this.userId = userId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.blocked = false;
    this.password = password;
    this.username = username;
    this.walletAddress = walletAddress;

  }
}
