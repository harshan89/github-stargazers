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