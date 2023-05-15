import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Pages from "./pages";

const APOLLO_SERVER_URI = "http://localhost:4000";

const client = new ApolloClient({
  uri: APOLLO_SERVER_URI,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
