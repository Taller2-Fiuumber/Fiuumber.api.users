/*
  Warnings:

  - You are about to drop the column `walletId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[walletId]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `walletId` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_walletId_fkey";

-- DropIndex
DROP INDEX "User_walletId_key";

-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "walletId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "walletId";

-- CreateTable
CREATE TABLE "Passenger" (
    "walletId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Passenger_walletId_key" ON "Passenger"("walletId");

-- CreateIndex
CREATE UNIQUE INDEX "Passenger_userId_key" ON "Passenger"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_walletId_key" ON "Driver"("walletId");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
