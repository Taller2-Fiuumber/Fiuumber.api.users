import { Wallet } from "../domain/wallet";

export const createWallet = async (): Promise<string> => {
  const url =
    "https://fiuumber-api-payments.herokuapp.com/api/wallets-service/wallet";
  const response = await fetch(url, { method: "POST", body: "" });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const wallet = (await response.json()) as Wallet;
  return wallet.address;
};
