import {expect, test} from '@jest/globals';
import { Driver } from '../../src/domain/driver';
import { DriverVehicle } from '../../src/domain/driver_vehicle';
import { Passenger } from '../../src/domain/passenger';
import { Vehicle } from '../../src/domain/vehicle';

test('creates a new passenger', () => {

    const createdAt = new Date('2022-12-05T01:21:52.581Z');
    const updatedAt = new Date('2022-12-05T01:22:19.238Z');
    const lastLogin =  new Date('2022-12-05T01:22:19.236Z');
    
    const passenger = new Passenger(
        1,
        'fmilhas@fi.uba.ar',
        'Facundo',
        'Milhas',
        'Las Heras 1649',
        '1234',
        'fmilhas',
        'asdf561329bhjw67hjs',
        createdAt,
        updatedAt,
        lastLogin, 
        'EMAIL');
    expect(passenger.userId).toBe(1);
    expect(passenger.email).toBe('fmilhas@fi.uba.ar');
    expect(passenger.firstName).toBe('Facundo');
    expect(passenger.lastName).toBe('Milhas');
    expect(passenger.address).toBe('Las Heras 1649');
    expect(passenger.password).toBe('1234');
    expect(passenger.username).toBe('fmilhas');
    expect(passenger.walletAddress).toBe('asdf561329bhjw67hjs');
    expect(passenger.createdAt).toBe(createdAt);
    expect(passenger.updatedAt).toBe(updatedAt);
    expect(passenger.lastLogin).toBe(lastLogin);
    expect(passenger.accountType).toBe('EMAIL');


    //Not a constructor parameter
    expect(passenger.profile).toBe('passenger');


});


test('creates a new driver', () => {

    const createdAt = new Date('2022-12-05T01:21:52.581Z');
    const updatedAt = new Date('2022-12-05T01:22:19.238Z');
    const lastLogin =  new Date('2022-12-05T01:22:19.236Z');

    const vehicle = new Vehicle(1, 'Ford', 'mustang', 'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2020-onix-premier/colorizer/01-images/julio-20/2-onix-premier-seeker-met-5.png?imwidth=960');

    const driverVehicle = new DriverVehicle('218 GSS', '2018', 'red', vehicle);
    
    const driver = new Driver(
        1,
        'fmilhas@fi.uba.ar',
        'Facundo',
        'Milhas',
        'Las Heras 1649',
        driverVehicle,
        '1234',
        'fmilhas',
        'asdf561329bhjw67hjs',
        createdAt,
        updatedAt,
        lastLogin, 
        'EMAIL');

    //Test Driver's attributes
    expect(driver.userId).toBe(1);
    expect(driver.email).toBe('fmilhas@fi.uba.ar');
    expect(driver.firstName).toBe('Facundo');
    expect(driver.lastName).toBe('Milhas');
    expect(driver.address).toBe('Las Heras 1649');

    //Test Driver's DriverVehicle attributes
    expect(driver.vehicle.domain).toBe('218 GSS');
    expect(driver.vehicle.modelYear).toBe('2018');
    expect(driver.vehicle.colorName).toBe('red');
    
    //Test DriverVehicle's Vehicle attributes
    expect(driver.vehicle.vehicle.id).toBe(1);
    expect(driver.vehicle.vehicle.brand).toBe('Ford');
    expect(driver.vehicle.vehicle.model).toBe('mustang');
    expect(driver.vehicle.vehicle.image).toBe('https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2020-onix-premier/colorizer/01-images/julio-20/2-onix-premier-seeker-met-5.png?imwidth=960');

    //Finish testind Driver's attributes
    expect(driver.password).toBe('1234');
    expect(driver.username).toBe('fmilhas');
    expect(driver.walletAddress).toBe('asdf561329bhjw67hjs');
    expect(driver.createdAt).toBe(createdAt);
    expect(driver.updatedAt).toBe(updatedAt);
    expect(driver.lastLogin).toBe(lastLogin);
    expect(driver.accountType).toBe('EMAIL');


    //Not a constructor parameter
    expect(driver.profile).toBe('driver');


});
