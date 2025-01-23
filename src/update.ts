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

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "Title 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  // updates the data if it is available. If not then create
  const upsertData = await prisma.post.upsert({
    where: {
      id: 9,
    },
    update: {
      authorName: "RK",
    },
    create: {
      title: "Title 1",
      content: "Content 1",
    },
  });

  console.log(upsertData);
};

updates();
