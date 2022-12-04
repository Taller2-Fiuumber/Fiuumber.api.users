import { createDriver, createPassenger, createVehicle } from '../../services/user-service';
import { encrypt } from '../../utils/useful-functions';

import { Passenger, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const createPassengers = async () => {

    // await prisma.driverVehicle.deleteMany();

    await prisma.driver.deleteMany();
    await prisma.passenger.deleteMany();
    await prisma.user.deleteMany();

    await prisma.driverVehicle.deleteMany();
    await prisma.driver.deleteMany();

    console.log("Creating users...");
    const encryptedPassword: string = await encrypt("12345678");

    await createPassenger("jnramirez@fiuumber.com", "Jeremias", "Ramirez","unsername", encryptedPassword, "Calle Falsa 123", "claveprivada$$", "EMAIL");
    await createPassenger("elpapu@fiuumber.com.ar", "El", "Papu","unsername", encryptedPassword, "Calle Falsa 124", "claveprivada$$", "GOOGLE");

    await createDriver("elcomandante@fiuumber.com", "Ricardo", "Fort","unsername", encryptedPassword, "Maiameeeee", "claveprivada$$", "AA 123 AK", "2022", "Rojo", "ROLLS ROYCE", "PHANTOM", "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2020-onix-premier/colorizer/01-images/julio-20/2-onix-premier-seeker-met-5.png?imwidth=960", "EMAIL");

};

createPassengers();
