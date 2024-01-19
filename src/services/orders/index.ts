import orderRepositories from '../../repositories/orders';
import { order } from '../../protocols';

async function postProductinOrder(infosOrder: order) {
  return orderRepositories.createOrder(infosOrder);
}

const orderServices = {
  postProductinOrder,
};

export default orderServices;
