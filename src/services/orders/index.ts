import orderRepositories from '../../repositories/orders';
import { order } from '../../protocols';

import { notFound } from '../../errors';

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

const orderServices = {
  postProductinOrder,
  deleteProductOrder,
};

export default orderServices;
