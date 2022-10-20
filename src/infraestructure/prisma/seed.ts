import { createPassenger } from '../../services/user-service';
import { encrypt } from '../../utils/useful-functions';

import { Passenger, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


const createPassengers = async () => {

    const deletePassenger = await prisma.passenger.deleteMany();
    const deleteUser = await prisma.user.deleteMany();

    console.log("Creating passengers...");
    const encryptedPassword: string = await encrypt("juancho1234");
    await createPassenger("juancho@fiuumber.com.ar", "Juan", "Perez","unsername", "Calle Falsa 123", "claveprivada$$", encryptedPassword, "walletPrivateKey");
    const encryptedPassword2: string = await encrypt("elpapu1234");
    await createPassenger("elpapu@fiuumber.com.ar", "El", "Papu","unsername", "Calle Falsa 124", "claveprivada$$", encryptedPassword2, "walletPrivateKey");


};

createPassengers();
