import { User } from './user';
import { Wallet } from './wallet';

class Passenger extends User {
  profile: string;
  wallet: Wallet;

  constructor(email: string, firstName: string, lastName: string, location: string, wallet: Wallet) {
    super(email, firstName, lastName, location);
    this.profile = "passenger";
    this.wallet = wallet;
  }
}
