import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Query: {
    books: (_, __, ctx) => {
      console.log({ ctx: ctx.example });
      return [
        {
          title: "Elysia",
          author: "saltyAom",
        },
      ];
    },
  },
  Book: {
    chapters: (parent, _, ctx) => {
      console.log({ parent: parent.title });
      console.log({ ctx: ctx.example });
      return [
        {
          content: "string",
          title: "string",
        },
      ];
    },
  },
};

export default resolvers;
