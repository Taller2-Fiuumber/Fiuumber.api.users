import {expect, test} from '@jest/globals';
import { prismaMock } from '../../singleton'
import * as adminServices from '../../src/services/administrator-service';
import { mockReset, mockClear } from 'jest-mock-extended';


test('should create new admin ', async () => {
    mockClear(prismaMock)

    const admin = {
        id:1,
        firstName: 'Rich',
        lastName: 'Richie',
        email: 'hello2@prisma.io',
        password : '1234',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.administrator.create.mockResolvedValue(admin)

    await expect(adminServices.createAdministrator(admin.email,admin.firstName,admin.lastName,admin.password)).resolves.toEqual({
        id: 1,
        firstName: 'Rich',
        lastName: 'Richie',
        email: 'hello2@prisma.io',
        password : '1234',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    })
  })
