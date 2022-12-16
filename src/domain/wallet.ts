export class Wallet {
  _id: string;
  address: string;
  privateKey: string;

  constructor(_id: string, address: string, privateKey: string) {
    this._id = _id;
    this.privateKey = privateKey;
    this.address = address;
  }
}
