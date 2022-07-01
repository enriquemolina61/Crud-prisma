/*
  Warnings:

  - Added the required column `sell` to the `bicycle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bicycle" ADD COLUMN     "sell" BOOLEAN NOT NULL;
