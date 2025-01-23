import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 4,
  //     },
  //     data: {
  //       title: "Title 4",
  //       content: "Content 4",
  //       authorName: "Author 4",
  //     },
  //   });

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Title 2",
    },
    data: {
      published: true,
    },
  });

  console.log(updateMany);
};

updates();
