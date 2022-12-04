/*
  Warnings:

  - The `accountType` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `profile` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "profile",
ADD COLUMN     "profile" "Profile" NOT NULL,
DROP COLUMN "accountType",
ADD COLUMN     "accountType" "AccountType" NOT NULL DEFAULT 'EMAIL';
