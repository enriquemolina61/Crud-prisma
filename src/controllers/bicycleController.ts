import { Request, Response } from "express";
import { CreateBicycle } from "../services/bicycleServices";

export class BicycleController {
  async handle(request: Request, response: Response) {
    const { color, gears, brand, model, price } = request.body;

    const createBicycle = new CreateBicycle();
    const result = await createBicycle.execute({
      color,
      gears,
      brand,
      model,
      price,
    });
    return response.json(result);
  }
}
