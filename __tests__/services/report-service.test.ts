import {expect, test} from '@jest/globals';
import { prismaMock } from '../../singleton'
import * as reportServices from '../../src/services/report-service';
import { mockReset, mockClear } from 'jest-mock-extended';



test('should create new report ', async () => {
    const report = {
        id: 1,
        driverId:1,
        passengerId: 2,
        reason: 'Me secuestró',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.report.create.mockResolvedValue(report)

    await expect(reportServices.createReport(report.driverId, report.passengerId, report.reason)).resolves.toEqual({
        id: 1,
        driverId:1,
        passengerId: 2,
        reason: 'Me secuestró',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
    })
});

test('should get reports by passenger id ', async () => {
 
    const report = {
        id: 1,
        driverId:1,
        passengerId: 2,
        reason: 'Me secuestró',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.report.findMany.mockResolvedValue([report])

    await expect(reportServices.getReportByPassengerId(report.passengerId)).resolves.toEqual([{
        id: 1,
        driverId:1,
        passengerId: 2,
        reason: 'Me secuestró',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
    }])
});

test('should get reports by driver id ', async () => {
 
    const report = {
        id: 1,
        driverId:1,
        passengerId: 2,
        reason: 'Me secuestró',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
    }

    prismaMock.report.findMany.mockResolvedValue([report])

    await expect(reportServices.getReportByDriverId(report.driverId)).resolves.toEqual([{
        id: 1,
        driverId:1,
        passengerId: 2,
        reason: 'Me secuestró',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
    }])
});

test('should get all reports', async () => {
    const report1 = {
        id: 1,
        driverId:1,
        passengerId: 2,
        reason: 'Me secuestró',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
    }
    const report2 = {
        id: 2,
        driverId:1,
        passengerId: 2,
        reason: 'Me secuestró denuevo',
        createdAt : new Date('2022-12-11T16:09:06.714Z'),
    }


    prismaMock.report.findMany.mockResolvedValue([report1,report2])
 
     await expect(reportServices.getReports()).resolves.toEqual([report1,report2])
});