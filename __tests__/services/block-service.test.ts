import {expect, test} from '@jest/globals';
import { AccountType, Profile } from "@prisma/client";

import { prismaMock } from '../../singleton'
import * as blockServices from '../../src/services/block-service';
import { mockReset, mockClear } from 'jest-mock-extended';


test('vacio', () => {


    //const address = createWallet()   
    //expect(adress).toBe();


});


// test('should block a user', async () => {

//     const user = {
//         id: 2,
//         createdAt: new Date("2022-12-04T19:27:28.839Z"),
//         updatedAt: new Date("2022-12-11T18:34:11.212Z"),
//         lastLogin: new Date("2022-12-04T19:27:28.839Z"),
//         accountType: AccountType.EMAIL,
//         email: "tomiomi@fi.uba.ar",
//         password: "$2b$10$5FSVMtusNsz9mz.b2iSnQu/Mwvq6UD3oCrdECfYwLUnd1asIDyxFm",
//         username: "anichucai",
//         address: "San Juan 111",
//         blocked: true,
//         firstName: "Tomas",
//         lastName: "Omi",
//         walletAddress: "",
//         notificationsToken: null,
//         profile: Profile.PASSENGER
//     }
//     prismaMock.user.create.mockResolvedValue(user)

//     await expect(blockServices.blockUserById(user.id)).resolves.toEqual({
//         id: 2,
//         createdAt: new Date("2022-12-04T19:27:28.839Z"),
//         updatedAt: new Date("2022-12-11T18:34:11.212Z"),
//         lastLogin: new Date("2022-12-04T19:27:28.839Z"),
//         accountType: "EMAIL",
//         email: "tomiomi@fi.uba.ar",
//         password: "$2b$10$5FSVMtusNsz9mz.b2iSnQu/Mwvq6UD3oCrdECfYwLUnd1asIDyxFm",
//         username: "anichucai",
//         address: "San Juan 111",
//         blocked: true,
//         firstName: "Tomas",
//         lastName: "Omi",
//         walletAddress: "",
//         notificationsToken: null,
//         profile: "PASSENGER"
//     })
// });



// test('should count blocked users', async () => {

 
//     const user = {
//         id: 2,
//         createdAt: new Date("2022-12-04T19:27:28.839Z"),
//         updatedAt: new Date("2022-12-11T18:34:11.212Z"),
//         lastLogin: new Date("2022-12-04T19:27:28.839Z"),
//         accountType: AccountType.EMAIL,
//         email: "tomiomi@fi.uba.ar",
//         password: "$2b$10$5FSVMtusNsz9mz.b2iSnQu/Mwvq6UD3oCrdECfYwLUnd1asIDyxFm",
//         username: "anichucai",
//         address: "San Juan 111",
//         blocked: true,
//         firstName: "Tomas",
//         lastName: "Omi",
//         walletAddress: "",
//         notificationsToken: null,
//         profile: Profile.PASSENGER
//     }

 
//     prismaMock.user.count.mockResolvedValue(1)
 
//     await expect(blockServices.getAmountOfBlockedUsers()).resolves.toEqual(1)
// });