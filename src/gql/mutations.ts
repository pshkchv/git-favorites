import { gql, useMutation } from '@apollo/client';

import { GET_STAR_REPOSITORIES } from './queries';

export const ADD_STAR_REPOSITORY = gql`
  mutation($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const REMOVE_STAR_REPOSITORY = gql`
  mutation RemoveStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const useAddStarMutation = () => {
  const [addStarMutation] = useMutation(ADD_STAR_REPOSITORY, {
    refetchQueries: [{ query: GET_STAR_REPOSITORIES }],
  });

  return (id: string) => {
    addStarMutation({ variables: { repositoryId: id } });
  };
};

export const useRemoveStarMutation = () => {
  const [removeStarMutation] = useMutation(REMOVE_STAR_REPOSITORY, {
    refetchQueries: [{ query: GET_STAR_REPOSITORIES }],
  });

  return (id: string) => {
    removeStarMutation({ variables: { repositoryId: id } });
  };
};
