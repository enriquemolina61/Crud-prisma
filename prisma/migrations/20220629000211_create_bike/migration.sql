-- CreateTable
CREATE TABLE "Bicycle" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "gears" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Bicycle_pkey" PRIMARY KEY ("id")
);
