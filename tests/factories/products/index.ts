import { faker } from "@faker-js/faker";
import prisma from "../../../src/database/db";

async function createProducts(){
    return prisma.products.create({
        data:
            {
                image: 'https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg',
                price: 3050,
                name: "hamburguer",
                code:202002
            }
    })
}

const productsFactories = {
    createProducts
}

export default productsFactories