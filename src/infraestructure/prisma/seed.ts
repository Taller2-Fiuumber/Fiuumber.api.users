import { createPassenger, createVehicle } from '../../services/user-service';
import { encrypt } from '../../utils/useful-functions';

import { Passenger, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


const createPassengers = async () => {

    const deletePassenger = await prisma.passenger.deleteMany();
    const deleteUser = await prisma.user.deleteMany();

    console.log("Creating passengers...");
    const encryptedPassword: string = await encrypt("juancho1234");
    await createPassenger("juancho@fiuumber.com.ar", "Juan", "Perez","unsername", encryptedPassword, "Calle Falsa 123", "claveprivada$$");
    const encryptedPassword2: string = await encrypt("elpapu1234");
    await createPassenger("elpapu@fiuumber.com.ar", "El", "Papu","unsername", encryptedPassword2, "Calle Falsa 124", "claveprivada$$");


};

const createVehicles = async () => {
    console.log("Creating vehicles...");
    await createVehicle("CHEVROLET", "ONIX", "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0d008ceaa2eb419883ad5c2f1eea7838.jpg");
    await createVehicle("CHEVROLET", "CRUZE", "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2019-cruze-premier/colorizer/enero-21/colorizer-azul-eclipse.jpg?imwidth=960");
    await createVehicle("FORD", "MUSTANG", "https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/mustang/mustang-2020/colorizer/gris-magnetico/far-mustang-colorizer-gris-magnetico.jpg.dam.full.high.jpg/1576883732817.jpg");
};

createPassengers();
createVehicles();
