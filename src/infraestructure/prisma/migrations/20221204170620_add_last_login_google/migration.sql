-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAtGoogle" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastLoginGoogle" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
