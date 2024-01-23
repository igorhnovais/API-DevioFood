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

async function getReadyNames() {
  return prisma.finishes.findMany({
    where: {
      isFinish: true,
      isREady: true,
    },
  });
}

async function updateFinish(id: number) {
  return prisma.finishes.update({
    where: {
      id,
    },
    data: {
      isREady: true,
    },
  });
}

async function getIdByname(nameCustomer: string) {
  return prisma.finishes.findFirst({
    where: {
      nameCustomer,
    },
  });
}

const finishRepositories = {
  finishOrder,
  getFinishNames,
  getReadyNames,
  updateFinish,
  getIdByname,
};

export default finishRepositories;
