import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router-dom";
import router from "@/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </ApolloProvider>
  </StrictMode>
);
