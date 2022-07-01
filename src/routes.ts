import { Router } from "express";
import { BicycleController } from "./controllers/bicycleController";

const routes = Router();
const bicycle = new BicycleController();

routes.post("/bicycle/", bicycle.createBicycle);
routes.get("/bicycles/", bicycle.findAllBicycles);

export { routes };
