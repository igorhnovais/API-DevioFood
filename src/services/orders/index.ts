import orderRepositories from '../../repositories/orders';
import finishRepositories from '../../repositories/finishes';
import { order } from '../../protocols';

import { badRequest, notFound, unprocessableEntity } from '../../errors';

async function postProductinOrder(infosOrder: order) {
  return orderRepositories.createOrder(infosOrder);
}

async function postFinishedOrder(name: string) {
  const orderExists = await orderRepositories.findOrderByNameCustomer(name);

  if (!orderExists) {
    throw notFound('Escolha algo primeiro');
  }

  return finishRepositories.finishOrder(name);
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

async function resumeOrder(nameCustomer: string) {
  let resume = {};
  if (nameCustomer === '') {
    throw unprocessableEntity('insira o nome do cliente');
  }
  const balance = await orderRepositories.resumeOrder(nameCustomer);

  if (!balance) {
    throw notFound('nenhum cliente encontrado');
  }

  const info =
    await orderRepositories.resumeInfoOrderByNameCustomer(nameCustomer);

  resume = {
    nameCustomer: balance.nameCustumer,
    balance: balance._sum.total,
    infos: info.map(r => ({
      total: r.total,
      observation: r.observation,
      drop: r.drop,
      description: r.description,
      aditional: r.aditional,
      quantity: r.quantity,
      transshipment: r.transshipment,
    })),
  };

  return resume;
}

const orderServices = {
  postProductinOrder,
  postFinishedOrder,
  deleteProductOrder,
  updateOrder,
  resumeOrder,
};

export default orderServices;
