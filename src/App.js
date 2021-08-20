import './App.scss';
import client from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import RepositoryList from './Components/RepositoryList'

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`)
    });
});

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="app">
          <RepositoryList />
        </div>
      </ApolloProvider>
  );
}

export default App;
