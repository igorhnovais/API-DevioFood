import prisma from "../../../src/database/db";

async function createOrders(productId: number){
    return prisma.orders.create({
        data: {
            productId,
            nameCustumer: "joao",
            observation: "sem obs",
            transshipment: 0,
            total: 4050,
            drop: false,
            description: "bla bla",
            aditional: "bacon",
            quantity: 1
        }
    })
}

async function updateOrder(nameCustumer: string){
    return prisma.orders.updateMany({
        where:{
            nameCustumer,
        },
        data: {
            drop: true,
        }
    })
}

const objOrder = {
    productId: 3,
    nameCustumer: "joao",
    observation: "sem obs",
    transshipment: 0,
    total: 4050,
    drop: false,
    description: "bla bla",
    aditional: "bacon",
    quantity: 1
}

const ordersFactories = {
    createOrders,
    updateOrder,
    objOrder,
}

export default ordersFactories