import { gql } from "../generated";

const BOOKS_QUERY = gql(/* GraphQL */ `
  query BooksQuery {
    books {
      ...BookFragment
      chapters {
        ...BookChapterFragment
      }
    }
  }
`);

export default BOOKS_QUERY;
