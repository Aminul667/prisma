import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title",
  //       content: "This is content...",
  //       authorName: "Rahat Khan",
  //     },
  //   });

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "Author 3",
      },
    ],
  });

  console.log({ createMany });
};

main();
