import { useState } from "react";

import "./App.css";
import { useQuery } from "@apollo/client";
import BOOKS_QUERY from "./gql/queries/books.query";

function App() {
  const [count, setCount] = useState(0);
  const { data } = useQuery(BOOKS_QUERY);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        {data?.books?.map((book) => (
          <div key={book?.title}>
            <p>{book?.title}</p>
            <p>{book?.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
