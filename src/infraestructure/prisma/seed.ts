import { PrismaClient } from '@prisma/client';
import { createDriver, createPassenger } from '../../services/user-service';

const prisma = new PrismaClient();

const createPassengers = async () => {
    console.log("Creating passengers...");
    await createPassenger("juancho@fiuumber.com.ar", "Juan", "Perez", "Calle Falsa 123", "claveprivada$$", "juancho1234");
    await createPassenger("elpapu@fiuumber.com.ar", "El", "Papu", "Calle Falsa 124", "claveprivada$$", "elpapu1234");
};

createPassengers();