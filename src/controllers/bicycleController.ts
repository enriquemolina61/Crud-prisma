import { Request, Response } from "express";
import { BicycleService } from "../services/bicycleServices";
import { prisma } from "../database/prismaclient";

export class BicycleController {
  async createBicycle(request: Request, response: Response) {
    try {
      const { color, gears, brand, model, price } = request.body;

      const resposta = { message: "Favor preencher todos os campos!" };

      if (!color || !gears || !brand || !model || !price) {
        return response.json(resposta);
      }

      const bicycle = new BicycleService();
      const result = await bicycle.createBicycle({
        color,
        gears,
        brand,
        model,
        price,
      });
      return response.json(result);
    } catch (error) {
      response.status(404).send(Error!);
    }
  }

  async findAllBicycles(request: Request, response: Response) {
    try {
      const bicycles = new BicycleService();
      const result = await bicycles.findAllBicycles();
      return response.json(result);
    } catch (error) {
      response.status(404).send(Error!);
    }
  }

  async findByColor(request: Request, response: Response) {
    const resposta = { message: "Nao existe bicicleta dessa cor!" };
    try {
      const color = request.params.color;
      const result = new BicycleService();
      const bicycle = await result.findByColor(color);

      return response.json(bicycle);
    } catch (error) {
      response.status(404).send(Error!);
    }
  }
  async findByPrice(request: Request, response: Response) {
    try {
      const price = +request.params.price;
      const result = new BicycleService();
      const bicycle = await result.findByPrice(price);

      return response.json(bicycle);
    } catch (error) {
      response.status(404).send(Error!);
    }
  }
  async updatedPrice(request: Request, response: Response) {
    try {
      const { price, id } = request.body;
      const result = new BicycleService();
      const bicycle = await result.updatedPrice(id, price);
      return response.json(bicycle);
    } catch (error) {
      response.status(404).send(Error!);
    }
  }
  async sellBicycle(request: Request, response: Response) {
    try {
      const { id } = request.body;
      // const { id } = request.params;
      // const sold = true;
      const result = new BicycleService();
      const bicycle = await result.sellBicycle(id);
      return response.json(bicycle);
    } catch (error) {
      response.status(404).send(Error!);
    }
  }
}
