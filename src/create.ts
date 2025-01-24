import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user 2",
  //     email: "user2@mail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software Enginear",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title 6",
      content: "This is a content of the post 6",
      authorId: 2,
      postCategory: {
        create: [{ categoryId: 2 }, { categoryId: 3 }, { categoryId: 4 }],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(JSON.stringify(createPost, null, 2));
};

main();
