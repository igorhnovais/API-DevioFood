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

async function findOrderByNameCustomer(nameCustumer: string) {
  return prisma.orders.findFirst({
    where: {
      nameCustumer,
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

async function updateOrder(nameCustumer: string) {
  return prisma.orders.updateMany({
    where: {
      nameCustumer,
    },
    data: {
      drop: true,
    },
  });
}

const orderRepositories = {
  createOrder,
  deleteOrder,
  findOrder,
  findOrderByNameCustomer,
  updateOrder,
};

export default orderRepositories;
