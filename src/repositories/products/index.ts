import prisma from '../../database/db';

async function getAllProducts() {
  return prisma.products.findMany();
}

async function getOneProduct(filter: string) {
  let whereClause;

  const filterAsInt = parseInt(filter, 10);
  const isFilterInt = !Number.isNaN(filterAsInt);

  if (isFilterInt) {
    whereClause = {
      code: filterAsInt,
    };
  } else {
    whereClause = {
      name: {
        contains: filter,
        mode: 'insensitive',
      },
    };
  }

  return prisma.products.findMany({
    where: whereClause,
  });
}

async function getOneProductById(id: number) {
  return prisma.products.findFirst({
    where: {
      id,
    },
  });
}

const productsRepositories = {
  getAllProducts,
  getOneProduct,
  getOneProductById,
};

export default productsRepositories;
