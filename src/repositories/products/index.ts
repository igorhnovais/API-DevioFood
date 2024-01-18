import prisma from '../../database/db';

async function getAllProducts() {
  return prisma.products.findMany();
}

const productsRepositories = {
  getAllProducts,
};

export default productsRepositories;
