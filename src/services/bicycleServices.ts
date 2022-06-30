import { response } from "express";
import { prisma } from "../database/prismaclient";

interface ICreateBicycle {
  color: string;
  gears: number;
  brand: string;
  model: string;
  price: number;
}

export class BicycleService {
  async createBicycle({ color, gears, brand, model, price }: ICreateBicycle) {
    const bicycle = await prisma.bicycle.create({
      data: {
        color,
        gears,
        brand,
        model,
        price,
      },
    });

    return bicycle;
  }
  async findallBicycle() {
    const bicycles = await prisma.bicycle.findMany({
      where: {
        color: ""
      },
    });
    return bicycles;
  }
}
