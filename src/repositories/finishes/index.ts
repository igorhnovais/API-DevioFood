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

const finishRepositories = {
  finishOrder,
};

export default finishRepositories;
