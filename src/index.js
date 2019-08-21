import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink, createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { Router } from "react-router";
import { Route } from "react-router-dom";
import { toast } from "react-toastify";
// import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "apollo-boost";
import { setContext } from "apollo-link-context";
import * as serviceWorker from "./serviceWorker";
import { baseURL } from "./base";
import App from "./App";
import history from "./history";




// const client = new ApolloClient({
//   link: ApolloLink.from([
//     onError(({ graphQLErrors, networkError }) => {
//       if (graphQLErrors)
//         graphQLErrors.map(({ message, locations, path }) => {
//           toast(message, { type: toast.TYPE.ERROR });
//           console.log(locations, path);
//         });
//       if (networkError) toast(`Network error: ${networkError}`, { type: toast.TYPE.ERROR });
//     }),
//     new HttpLink({
//       uri: baseURL,
//       credentials: "same-origin" //Set to include if you whish to use cookie in place of token
//     })
//   ]),
//   cache: new InMemoryCache()
// });



const httpLink = createHttpLink({ uri: baseURL });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
