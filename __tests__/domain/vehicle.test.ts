import {expect, test} from '@jest/globals';
import { Vehicle } from '../../src/domain/vehicle';

test('creates a new vehicle', () => {

    const vehicle = new Vehicle(
        1,
        'Toyota',
        'Etios',
        'img',
        );
    expect(vehicle.id).toBe(1);
    expect(vehicle.brand).toBe('Toyota');
    expect(vehicle.model).toBe('Etios');
    expect(vehicle.image).toBe('img');
});
