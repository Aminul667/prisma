import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  //   find sum age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  //   find count
  const countData = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  console.log({ countData });
};

aggregates();
