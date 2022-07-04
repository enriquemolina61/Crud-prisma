import { Router } from "express";
import { BicycleController } from "./controllers/bicycleController";

const routes = Router();
const bicycle = new BicycleController();

routes.post("/bicycle/", bicycle.createBicycle); //Rota para cadastrar bicicleta
routes.get("/bicycles/", bicycle.findAllBicycles); //Rota para filtrar bicicletar disponiveis
routes.get("/bicycles/color/:color", bicycle.findByColor); //Rota para filtrar as bicicletas por cor
routes.put("/bicycles/price/", bicycle.findByPrice); //Rota para filtrar bicicletas até o preço desejado
routes.put("/bicycles/update/", bicycle.updatedPrice); //Rota para alterar preço de bicicleta
routes.put("/bicycles/sell/", bicycle.sellBicycle); //Rota para vender uma bicicleta
routes.get("/bicycles/sold/", bicycle.soldBicycle); //Rota para filtrar todas as bicicletas já vendidas

export { routes };
