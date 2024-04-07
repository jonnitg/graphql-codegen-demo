import { Elysia } from "elysia";
import { apollo } from "@elysiajs/apollo";
import { context, resolvers, typeDefs } from "./gql/schema";
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(cors({ origin: "*" }))
  .use(
    apollo({
      typeDefs,
      resolvers,
      context,
      path: "/graphql",
      enablePlayground: true,
    })
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
