import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });

  //   relational filter
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
