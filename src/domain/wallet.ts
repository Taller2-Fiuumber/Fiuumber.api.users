export class Wallet {
  id: string;
  walletPrivateKey: string;

  constructor(id: string, walletPrivateKey: string) {
    this.id = id;
    this.walletPrivateKey = walletPrivateKey;
  }
}
