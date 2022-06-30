/*
  Warnings:

  - You are about to drop the `Bicycle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Bicycle";

-- CreateTable
CREATE TABLE "bicycle" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "gears" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uptated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bicycle_pkey" PRIMARY KEY ("id")
);
