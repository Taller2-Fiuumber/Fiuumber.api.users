import {v4 as uuidv4} from 'uuid';

export abstract class User {
  id: uuidv4;
  email: string;
  firstName: string;
  lastName: string;
  location:  string;
  blocked: boolean;
  abstract profile: string;

  constructor(email: string, firstName: string, lastName: string, location: string) {
    this.id = uuidv4();
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.blocked = false;
  }
}
