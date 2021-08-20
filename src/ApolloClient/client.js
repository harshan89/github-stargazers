import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            Authorization: 'Bearer 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',
        }
    }));

    return forward(operation);
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});

export default client;