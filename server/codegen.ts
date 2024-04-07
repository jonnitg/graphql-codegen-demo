import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/gql/type-defs/*.ts",
  generates: {
    "./src/gql/types.ts": {
      config: {
        useIndexSignature: true,
        contextType: "./context#AppContext",
        // if you want to add the type from another source you can use mappers
        // mappers: {
        // Book: "./from-somewhere-book-type#BookCustomType",
        // },
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};
export default config;
