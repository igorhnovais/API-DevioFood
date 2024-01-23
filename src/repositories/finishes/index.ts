import prisma from '../../database/db';

async function finishOrder(name: string) {
  return prisma.finishes.create({
    data: {
      nameCustomer: name,
      isFinish: true,
      isREady: false,
    },
  });
}

async function getFinishNames() {
  return prisma.finishes.findMany({
    where: {
      isFinish: true,
      isREady: false,
    },
  });
}

const finishRepositories = {
  finishOrder,
  getFinishNames,
};

export default finishRepositories;
