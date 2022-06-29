import { response } from "express";
import { prisma } from "../database/prismaclient";

interface ICreateBicycle {
  color: string;
  gears: number;
  brand: string;
  model: string;
  price: number;
}
const result = response.json({message:"Preencha todos os campos!"});

export class CreateBicycle {
  async execute({ color, gears, brand, model, price }: ICreateBicycle) {
    if (!color || !gears || !brand || !model || !price) {
      return result;
    }
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
}
