import { Router } from "express";
import { BicycleController } from "./controllers/bicycleController";

const routes = Router();
const createBicycle = new BicycleController();

routes.post("/bicycle/", createBicycle.handle);

export { routes };
