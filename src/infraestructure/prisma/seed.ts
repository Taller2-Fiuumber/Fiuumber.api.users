import { createPassenger, createVehicle } from '../../services/user-service';

const createPassengers = async () => {
    console.log("Creating passengers...");
    await createPassenger("juancho@fiuumber.com.ar", "Juan", "Perez", "Calle Falsa 123", "claveprivada$$", "juancho1234");
    await createPassenger("elpapu@fiuumber.com.ar", "El", "Papu", "Calle Falsa 124", "claveprivada$$", "elpapu1234");
};

const createVehicles = async () => {
    console.log("Creating vehicles...");
    await createVehicle("CHEVROLET", "ONIX", "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0d008ceaa2eb419883ad5c2f1eea7838.jpg");
    await createVehicle("CHEVROLET", "CRUZE", "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2019-cruze-premier/colorizer/enero-21/colorizer-azul-eclipse.jpg?imwidth=960");
    await createVehicle("FORD", "MUSTANG", "https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/mustang/mustang-2020/colorizer/gris-magnetico/far-mustang-colorizer-gris-magnetico.jpg.dam.full.high.jpg/1576883732817.jpg");
};

createPassengers();
createVehicles();