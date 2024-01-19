import prisma from '../../database/db';
import { order } from '../../protocols';

async function createOrder(infosOrder: order) {
  return prisma.orders.create({
    data: {
      productId: infosOrder.productId,
      nameCustumer: infosOrder.nameCustumer,
      observation: infosOrder.observation,
      transshipment: infosOrder.transshipment,
      total: infosOrder.total,
      drop: infosOrder.drop,
      description: infosOrder.description,
      aditional: infosOrder.aditional,
      quantity: infosOrder.quantity,
    },
  });
}

async function findOrder(id: number) {
  return prisma.orders.findFirst({
    where: {
      id,
    },
  });
}

async function deleteOrder(id: number) {
  return prisma.orders.delete({
    where: {
      id,
    },
  });
}

const orderRepositories = {
  createOrder,
  deleteOrder,
  findOrder,
};

export default orderRepositories;
