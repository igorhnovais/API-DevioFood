import productsRepositories from '../../repositories/products';
import { notFound } from '../../errors';

async function getAllProducts() {
  return productsRepositories.getAllProducts();
}

async function getOneProduct(filter: string) {
  const response = await productsRepositories.getOneProduct(filter);

  if (response.length === 0) {
    throw notFound('produto não encontrado');
  }

  return response;
}

const productsServices = {
  getAllProducts,
  getOneProduct,
};

export default productsServices;
