import {expect, test} from '@jest/globals';
import { Vehicle } from '../../src/domain/vehicle';
import { DriverVehicle } from '../../src/domain/driver_vehicle';

test('creates a new driver vehicle', () => {

    const vehicle = new Vehicle(
        1,
        'Toyota',
        'Etios',
        'img',
    );

    const driverVehicle = new DriverVehicle(
        'ABC441',
        '2009',
        'Red',
        vehicle,
    );
    expect(driverVehicle.domain).toBe('ABC441');
    expect(driverVehicle.modelYear).toBe('2009');
    expect(driverVehicle.colorName).toBe('Red');
    expect(driverVehicle.vehicle).toBe(vehicle);
});