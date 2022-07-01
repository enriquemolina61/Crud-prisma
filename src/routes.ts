import { Router } from "express";
import { BicycleController } from "./controllers/bicycleController";

const routes = Router();
const bicycle = new BicycleController();

routes.post("/bicycle/", bicycle.createBicycle);
routes.get("/bicycles/", bicycle.findAllBicycles);
routes.get("/bicycles/color/:color", bicycle.findByColor);
routes.get("/bicycles/price/:price", bicycle.findByPrice);
routes.put("/bicycles/update/:id", bicycle.updatedPrice);
export { routes };

