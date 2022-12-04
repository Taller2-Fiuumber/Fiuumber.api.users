/*
  Warnings:

  - You are about to drop the column `walletId` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `walletId` on the `Passenger` table. All the data in the column will be lost.
  - You are about to drop the `Wallet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_walletId_fkey";

-- DropForeignKey
ALTER TABLE "Passenger" DROP CONSTRAINT "Passenger_walletId_fkey";

-- DropIndex
DROP INDEX "Driver_walletId_key";

-- DropIndex
DROP INDEX "Passenger_walletId_key";

-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "walletId";

-- AlterTable
ALTER TABLE "Passenger" DROP COLUMN "walletId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "walletAddress" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Wallet";
