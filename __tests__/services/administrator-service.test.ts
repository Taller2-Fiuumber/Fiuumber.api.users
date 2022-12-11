import {expect, test} from '@jest/globals';
import { prismaMock } from '../../singleton'
import * as adminServices from '../../src/services/administrator-service';
import { mockReset, mockClear } from 'jest-mock-extended';


test('should create new admin ', async () => {
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
});

test('should update admin ', async () => {

    const admin = {
        id:1,
        firstName: 'Richie',
        lastName: 'Richie',
        email: 'hello2@prisma.io',
        password : '1234',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.administrator.update.mockResolvedValue(admin)

    await expect(adminServices.updateAdministrator(admin.id,admin.email,admin.firstName,admin.lastName,admin.password)).resolves.toEqual({
        id: 1,
        firstName: 'Richie',
        lastName: 'Richie',
        email: 'hello2@prisma.io',
        password : '1234',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
    })
});

test('should delete admin ', async () => {
 
     const admin = {
         id:1,
         firstName: 'Richie',
         lastName: 'Richie',
         email: 'hello2@prisma.io',
         password : '1234',
         createdAt : new Date('2022-12-11T16:09:06.714Z'),
         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
     }
 
     prismaMock.administrator.delete.mockResolvedValue(admin)
 
     await expect(adminServices.deleteAdministrator(admin.id)).resolves.toEqual({
         id: 1,
         firstName: 'Richie',
         lastName: 'Richie',
         email: 'hello2@prisma.io',
         password : '1234',
         createdAt : new Date('2022-12-11T16:09:06.714Z'),
         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
     })
});

test('should get admin by id ', async () => {
 
     const admin = {
         id:1,
         firstName: 'Richie',
         lastName: 'Richie',
         email: 'hello2@prisma.io',
         password : '1234',
         createdAt : new Date('2022-12-11T16:09:06.714Z'),
         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
     }
 
     prismaMock.administrator.findUnique.mockResolvedValue(admin)
 
     await expect(adminServices.getAdministratorById(admin.id)).resolves.toEqual({
         id: 1,
         firstName: 'Richie',
         lastName: 'Richie',
         email: 'hello2@prisma.io',
         password : '1234',
         createdAt : new Date('2022-12-11T16:09:06.714Z'),
         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
     })
});

test('should get admin by email ', async () => {
 
     const admin = {
         id:1,
         firstName: 'Richie',
         lastName: 'Richie',
         email: 'hello2@prisma.io',
         password : '1234',
         createdAt : new Date('2022-12-11T16:09:06.714Z'),
         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
     }
 
     prismaMock.administrator.findUnique.mockResolvedValue(admin)
 
     await expect(adminServices.getAdministratorByEmail(admin.email)).resolves.toEqual({
         id: 1,
         firstName: 'Richie',
         lastName: 'Richie',
         email: 'hello2@prisma.io',
         password : '1234',
         createdAt : new Date('2022-12-11T16:09:06.714Z'),
         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
     })
});

test('should count admins', async () => {

 
    const admin = {
         id:1,
         firstName: 'Richie',
         lastName: 'Richie',
         email: 'hello2@prisma.io',
         password : '1234',
         createdAt : new Date('2022-12-11T16:09:06.714Z'),
         updatedAt : new Date('2022-12-11T16:09:06.714Z'),
     }
 
     prismaMock.administrator.count.mockResolvedValue(1)
 
     await expect(adminServices.amountOfAdministrators()).resolves.toEqual(1)
});

test('should get all admins', async () => {

    prismaMock.administrator.findMany.mockResolvedValue([
        {
            id:1,
            firstName: 'Richie',
            lastName: 'Richie',
            email: 'hello2@prisma.io',
            password : '1234',
            createdAt : new Date('2022-12-11T16:09:06.714Z'),
            updatedAt : new Date('2022-12-11T16:09:06.714Z'),
       },
       {
        id:2,
        firstName: 'Richie',
        lastName: 'Richie',
        email: 'hello3@prisma.io',
        password : '1234',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
   }
     ])
 
     await expect(adminServices.getAdministrators()).resolves.toEqual([
        {
            id:1,
            firstName: 'Richie',
            lastName: 'Richie',
            email: 'hello2@prisma.io',
            password : '1234',
            createdAt : new Date('2022-12-11T16:09:06.714Z'),
            updatedAt : new Date('2022-12-11T16:09:06.714Z'),
       },
       {
        id:2,
        firstName: 'Richie',
        lastName: 'Richie',
        email: 'hello3@prisma.io',
        password : '1234',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
        updatedAt : new Date('2022-12-11T16:09:06.714Z'),
   }
     ])
});






  