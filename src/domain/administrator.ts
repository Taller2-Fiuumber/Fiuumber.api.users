export abstract class Administrator {
  adminId: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  constructor(
    adminId: number,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
  ) {
    this.adminId = adminId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}
