import { gql } from "../generated";

const BOOK_CHAPTER_FRAGMENT = gql(/* GraphQL */ `
  fragment BookChapterFragment on BookChapter {
    title
    content
  }
`);

export default BOOK_CHAPTER_FRAGMENT;
