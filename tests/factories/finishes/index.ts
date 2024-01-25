import prisma from "../../../src/database/db";

async function finishOrder(nameCustomer: string){
    return prisma.finishes.create({
        data: {
            nameCustomer,
            isFinish: true,
            isREady: false,
        }
    })
}

async function updateOrderFinish(id: number){
    return prisma.finishes.update({
        where: {
            id,
          },
          data: {
            isREady: true,
          },
    })
}

const finishFactories = {
    finishOrder,
    updateOrderFinish
}

export default finishFactories;