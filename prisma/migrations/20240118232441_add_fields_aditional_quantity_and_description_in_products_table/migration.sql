/*
  Warnings:

  - Added the required column `aditional` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "aditional" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
