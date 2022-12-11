import axios from "axios";
import { CONFIG } from "../../config";

export const HEADERS = { headers: { Accept: "application/json" } };
const URL_PAYMETNS = `${CONFIG.microservices.payments.url}${CONFIG.microservices.payments.basePath}`;

export const createWallet = async (): Promise<string> => {
  try {
    const url = `${URL_PAYMETNS}/wallet`;
    const response = await axios.post(url, HEADERS);
    const { address } = response.data;
    return address;
  } catch (ex) {
    console.error("Error creating wallet " + ex);
    throw ex;
  }
};