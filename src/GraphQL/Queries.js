import { gql } from "@apollo/client";

export const REPOSITORIES = gql`
  query GetRepos($first: Int!, $after: String) {
      search(query: "language:JavaScript stars:>10000", type: REPOSITORY, first: $first, after: $after) {
        repositoryCount
        edges {
          cursor
          node {
            ... on Repository {
              name
              description
              owner {
                ... on Organization {
                  name
                }
              }
              openGraphImageUrl
              stargazers(orderBy: {field: STARRED_AT, direction: DESC}) {
                totalCount
              }
              issues {
                totalCount
              }
              updatedAt
            }
          }
        }
      }
    }
`;