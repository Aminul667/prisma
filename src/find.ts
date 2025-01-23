import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDB = await prisma.post.findMany();

  //   only find the first one
  // const findFirst = await prisma.post.findFirstOrThrow({
  //   where: {
  //     id: 1,
  //   },
  // });

  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 9,
    },
    select: {
      title: true,
      content: true,
      authorName: true,
    },
  });

  console.log({ findUnique });
};

main();
