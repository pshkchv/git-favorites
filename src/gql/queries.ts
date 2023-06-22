import { gql } from '@apollo/client';

import { REPOSITORY_FRAGMENT } from './fragments';

export const GET_STAR_REPOSITORIES = gql`
  {
    viewer {
      name
      starredRepositories(last: 10) {
        nodes {
          ...repositoryInfo
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

export const SEARCH_REPOSITORIES = gql`
  query($searchKeyword: String!){
    search(query: $searchKeyword, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            ...repositoryInfo
          }
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;
