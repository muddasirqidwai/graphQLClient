import React from "react";
import BookList from "./components/books/BookList";
import AddBook from "./components/books/AddBook";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://yxl8r.sse.codesandbox.io/graphql"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>GraphQL Book Lists App</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}
