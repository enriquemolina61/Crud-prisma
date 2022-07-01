import { prisma } from "../database/prismaclient";
import { Request, response, Response } from "express";

interface ICreateBicycle {
  color: string;
  gears: number;
  brand: string;
  model: string;
  price: number;
}
interface IFindByColor {
  color: string;
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
  async findAllBicycles() {
    const bicycles = await prisma.bicycle.findMany();
    return bicycles;
  }

  async findByColor(color: string) {
    const bicycle = await prisma.bicycle.findMany({
      where: {
        color: color,
      },
    });    
    return bicycle;
  }
}
