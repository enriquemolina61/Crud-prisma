/*
  Warnings:

  - You are about to drop the column `sell` on the `bicycle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bicycle" DROP COLUMN "sell",
ADD COLUMN     "sold" BOOLEAN NOT NULL DEFAULT false;
