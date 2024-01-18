import productsRepositories from '../../repositories/products';

async function getAllProducts() {
  return productsRepositories.getAllProducts();
}

const productsServices = {
  getAllProducts,
};

export default productsServices;
