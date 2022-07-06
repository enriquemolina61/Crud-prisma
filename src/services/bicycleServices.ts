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
    if (!color || !gears || !brand || !model || !price) {
      return { message: "Favor preencher todos os campos!" };
    }
    return bicycle;
  }
  async findAllBicycles() {
    const bicycles = await prisma.bicycle.findMany({
      where: {
        sold: false,
      },
    });
    if (bicycles.length === 0) {
      return {
        message:
          "Não existe nenhuma bicicleta cadastrada até o momento, favor cadastrar as bicicletas.",
      };
    }
    return bicycles;
  }

  async findByColor(color: string) {
    const bicycle = await prisma.bicycle.findMany({
      where: {
        color: color,
      },
    });
    if (bicycle.length === 0) {
      return {
        message: "Não existe nenhuma bicicleta com essa cor.",
      };
    }

    return bicycle;
  }
  async findByPrice(price: number) {
    if (typeof price !== "number") {
      return {
        message: "Por favor, coloque um preço válido.",
      };
    }
    const bicycle = await prisma.bicycle.findMany({
      where: {
        price: {
          lte: price,
        },
        NOT: {
          sold: true,
        },
      },
    });

    if (bicycle.length === 0) {
      return {
        message:
          "Não existe nenhuma bicicleta até esse preço, favor aumentar o valor do filtro.",
      };
    }

    return bicycle;
  }
  async updatedPrice(id: string, price: number) {
    const bicycle = await prisma.bicycle.update({
      where: {
        id: id,
      },
      data: {
        price: price,
      },
    });
    if (bicycle.sold == true) {
      return {
        message: "Não é possivel alterar o preço de uma bicicleta vendida!",
      };
    }
    return bicycle;
  }
  async sellBicycle(id: string) {
    let bicycle = await prisma.bicycle.findUnique({
      where: {
        id: id,
      },
    });
    if (bicycle?.sold == true) {
      return {
        message: "Bicicleta já vendida!",
      };
    }
    bicycle = await prisma.bicycle.update({
      where: {
        id: id,
      },
      data: {
        sold: true,
      },
    });
    return bicycle;
  }

  async soldBicycle() {
    const bicycle = await prisma.bicycle.findMany({
      where: {
        sold: true,
      },
    });
    return bicycle;
  }
}
