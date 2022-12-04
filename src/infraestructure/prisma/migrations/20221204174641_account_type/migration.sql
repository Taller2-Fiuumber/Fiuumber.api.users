/*
  Warnings:

  - You are about to drop the column `createdAtGoogle` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastLoginGoogle` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('GOOGLE', 'EMAIL');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAtGoogle",
DROP COLUMN "lastLoginGoogle",
ADD COLUMN     "accountType" "AccountType" NOT NULL DEFAULT 'EMAIL';
