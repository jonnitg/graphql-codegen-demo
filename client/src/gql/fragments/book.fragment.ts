import { gql } from "../generated";

const BOOK_FRAGMENT = gql(/* GraphQL */ `
  fragment BookFragment on Book {
    title
    author
  }
`);

export default BOOK_FRAGMENT;
