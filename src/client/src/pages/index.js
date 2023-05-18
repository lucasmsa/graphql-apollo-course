import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import { Tracks } from "./tracks";
import { Track } from "./track";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tracks />
  },
  {
    path: "/track/:trackId",
    element: <Track />
  }
]);

export default function Pages() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}
