import orderRepositories from '../../repositories/orders';
import { order } from '../../protocols';

import { badRequest, notFound } from '../../errors';

async function postProductinOrder(infosOrder: order) {
  return orderRepositories.createOrder(infosOrder);
}

async function deleteProductOrder(id: number) {
  const product = await orderRepositories.findOrder(id);

  if (!product) {
    throw notFound('ordem não encontrada');
  }

  return orderRepositories.deleteOrder(id);
}

async function updateOrder(nameCustumer: string) {
  const anyOrder =
    await orderRepositories.findOrderByNameCustomer(nameCustumer);

  if (!anyOrder) {
    throw notFound('pedido não encontrado');
  }

  if (anyOrder.drop === true) {
    throw badRequest('pedido ja baixado');
  }

  return orderRepositories.updateOrder(nameCustumer);
}

const orderServices = {
  postProductinOrder,
  deleteProductOrder,
  updateOrder,
};

export default orderServices;
