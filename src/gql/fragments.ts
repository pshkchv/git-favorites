import { gql } from '@apollo/client';

export const REPOSITORY_FRAGMENT = gql`
  fragment repositoryInfo on Repository {
    id
    nameWithOwner
    viewerHasStarred
    primaryLanguage {
      name
    }
    releases(first: 1, orderBy: { field: CREATED_AT, direction: DESC }) {
      nodes {
        name
      }
    }
  }
`;
