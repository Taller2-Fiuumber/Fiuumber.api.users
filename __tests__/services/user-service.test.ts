import {expect, test} from '@jest/globals';
import { prismaMock } from '../../singleton'
import * as userServices from '../../src/services/user-service';
import { mockReset, mockClear } from 'jest-mock-extended';

/*---------------------------------Vehicle-------------------------------------*/
test('should create new vehicle ', async () => {
   
    const vehicle = {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.vehicle.create.mockResolvedValue(vehicle)

    await expect(userServices.createVehicle(vehicle.brand,vehicle.model,vehicle.image)).resolves.toEqual({
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    })
});



test('should update vehicle ', async () => {

    const vehicle = {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img2',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.vehicle.update.mockResolvedValue(vehicle)

    await expect(userServices.updateVehicle(vehicle.id,vehicle.brand,vehicle.model, vehicle.image)).resolves.toEqual({
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img2',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    })
});

test('should delete vehicle ', async () => {

    const vehicle = {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img2',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.vehicle.delete.mockResolvedValue(vehicle)

    await expect(userServices.deleteVehicle(vehicle.id)).resolves.toEqual({
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img2',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    })
});

test('should get vehicle by id ', async () => { 
 
    const vehicle = {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img2',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.vehicle.findUniqueOrThrow.mockResolvedValue(vehicle)

    await expect(userServices.getVehicle(vehicle.id)).resolves.toEqual({
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img2',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    })
});


test('should get all vehicles', async () => {

    prismaMock.vehicle.findMany.mockResolvedValue([
        {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
       },
       {
        id:2,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img2',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
   }
     ])
 
     await expect(userServices.getVehicles()).resolves.toEqual([
        {
            id:1,
            brand: 'Toyota',
            model: 'Etios',
            image : 'img',
            createdAt : new Date('2022-12-11T16:09:06.714Z'),
            updatedAt : new Date('2022-12-11T16:09:06.714Z'),
           },
           {
            id:2,
            brand: 'Toyota',
            model: 'Etios',
            image : 'img2',
            createdAt : new Date('2022-12-11T16:09:06.714Z'),
            updatedAt : new Date('2022-12-11T16:09:06.714Z'),
       }
     ])
});

/*---------------------------Driver Vehicle-------------------------------------*/

test('should create new driver vehicle ', async () => {

    const vehicle = {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }


    const driverVehicle = {
        id: 1,
        domain: 'ABC123',
        modelYear: '2016',
        colorName : 'Red',
        vehicleId: 1,
        vehicle:vehicle,
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z')
    }

    prismaMock.driverVehicle.create.mockResolvedValue(driverVehicle)

    await expect(userServices.createDriverVehicle(driverVehicle.domain,driverVehicle.modelYear,driverVehicle.colorName, vehicle.brand, vehicle.model,vehicle.image)).resolves.toEqual({
        id: 1,
        domain: 'ABC123',
        modelYear: '2016',
        colorName : 'Red',
        vehicleId: 1,
        vehicle:vehicle,
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z')
    })
});



test('should update driver vehicle ', async () => {

    const vehicle = {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }


    const driverVehicle = {
        id: 1,
        domain: 'ABC123',
        modelYear: '2016',
        colorName : 'Blue',
        vehicleId: 1,
        vehicle:vehicle,
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z')
    }

    prismaMock.driverVehicle.update.mockResolvedValue(driverVehicle)

    await expect(userServices.updateDriverVehicle(driverVehicle.id,driverVehicle.domain,driverVehicle.modelYear,driverVehicle.colorName, vehicle.brand, vehicle.model,vehicle.image)).resolves.toEqual({
        id: 1,
        domain: 'ABC123',
        modelYear: '2016',
        colorName : 'Blue',
        vehicleId: 1,
        vehicle:vehicle,
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z')
    })
});

test('should delete driver vehicle ', async () => {

    const vehicle = {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }


    const driverVehicle = {
        id: 1,
        domain: 'ABC123',
        modelYear: '2016',
        colorName : 'Blue',
        vehicleId: 1,
        vehicle:vehicle,
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z')
    }

    prismaMock.driverVehicle.delete.mockResolvedValue(driverVehicle)

    await expect(userServices.deleteDriverVehicle(driverVehicle.id)).resolves.toEqual({
        id: 1,
        domain: 'ABC123',
        modelYear: '2016',
        colorName : 'Blue',
        vehicleId: 1,
        vehicle:vehicle,
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z')
    })
});

test('should get driver vehicle by id', async () => {

    const vehicle = {
        id:1,
        brand: 'Toyota',
        model: 'Etios',
        image : 'img',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }


    const driverVehicle = {
        id: 1,
        domain: 'ABC123',
        modelYear: '2016',
        colorName : 'Blue',
        vehicleId: 1,
        vehicle:vehicle,
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z')
    }

    prismaMock.driverVehicle.findUniqueOrThrow.mockResolvedValue(driverVehicle)

    await expect(userServices.getDriverVehicle(driverVehicle.id)).resolves.toEqual({
        id: 1,
        domain: 'ABC123',
        modelYear: '2016',
        colorName : 'Blue',
        vehicleId: 1,
        vehicle:vehicle,
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z')
    })
});



// test('should get all driver vehicles', async () => {

//     const vehicle1 = {
//         id:1,
//         brand: 'Toyota',
//         model: 'Etios',
//         image : 'img',
//         createdAt : new Date('2022-12-11T16:09:06.714Z'),
//         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
//     }
//     const vehicle2 = {
//         id:2,
//         brand: 'Toyota',
//         model: 'Etios',
//         image : 'img2',
//         createdAt : new Date('2022-12-11T16:09:06.714Z'),
//         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
//     }



//     prismaMock.driverVehicle.findMany.mockResolvedValue([
//         {
//             id: 1,
//             domain: 'ABC123',
//             modelYear: '2016',
//             colorName : 'Blue',
//             vehicleId: 1,
//             vehicle: vehicle1,
//             createdAt : new Date('2022-12-11T16:09:06.714Z'),
//             updatedAt : new Date('2022-12-11T16:09:06.714Z')
//         },
//        {
//         id: 2,
//         domain: 'ABC123',
//         modelYear: '2016',
//         colorName : 'Blue',
//         vehicleId: 1,
//         vehicle: vehicle2,
//         createdAt : new Date('2022-12-11T16:09:06.714Z'),
//         updatedAt : new Date('2022-12-11T16:09:06.714Z')
//    }
//      ])
 
//      await expect(userServices.getDriverVehicles()).resolves.toEqual([
//         {
//             id: 1,
//             domain: 'ABC123',
//             modelYear: '2016',
//             colorName : 'Blue',
//             vehicleId: 1,
//             vehicle: vehicle1,
//             createdAt : new Date('2022-12-11T16:09:06.714Z'),
//             updatedAt : new Date('2022-12-11T16:09:06.714Z')
//         },
//        {
//         id: 2,
//         domain: 'ABC123',
//         modelYear: '2016',
//         colorName : 'Blue',
//         vehicleId: 1,
//         vehicle: vehicle2,
//         createdAt : new Date('2022-12-11T16:09:06.714Z'),
//         updatedAt : new Date('2022-12-11T16:09:06.714Z')
//    }
//      ])
// });

/*--------------------------------------User-----------------------------------*/
