import bcrypt from "bcrypt";
const saltRounds = 10;

export const encrypt = (data: string): Promise<string> =>
  bcrypt.hash(data, saltRounds);
export const check = (data: string, hash: string): Promise<boolean> =>
  bcrypt.compare(data, hash);
