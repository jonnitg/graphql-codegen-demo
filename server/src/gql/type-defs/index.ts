import { gql } from "@elysiajs/apollo";

const typeDefs = gql`
  type Book {
    title: String
    author: String
    chapters: [BookChapter]
  }

  type BookChapter {
    title: String
    content: String
  }

  type Query {
    books: [Book]
  }
`;

export default typeDefs;
