import { useMemo } from 'react';
import { ApolloError, useQuery } from '@apollo/client';
import Grid from '@mui/material/Unstable_Grid2';

import { RepoList } from './RepoList';
import { ResponseLoadingWrapper } from './ResponseLoadingWrapper';
import { ResponseErrorBoundaries } from './ResponseErrorBoundaries';

import { GET_STAR_REPOSITORIES } from '../gql';
import { RepoItemType } from '../types';
import { GetStarRepositoriesResponse, RepositoryInfo } from '../types/gqlTypes';

export const FavRepositories = () => {
  const {
    data,
    loading,
    error,
  }: {
    data?: GetStarRepositoriesResponse;
    loading?: boolean;
    error?: ApolloError;
  } = useQuery(GET_STAR_REPOSITORIES);

  const favRepositories: RepositoryInfo[] | null = useMemo(() => {
    if (data && data.viewer.starredRepositories.nodes.length) {
      return data.viewer.starredRepositories
        .nodes as unknown as RepositoryInfo[];
    }

    return null;
  }, [data, loading]);

  return (
    <Grid xs={6}>
      <ResponseErrorBoundaries error={error}>
        <ResponseLoadingWrapper loading={loading}>
          <RepoList
            type={RepoItemType.FAVORITE}
            repositories={favRepositories}
          />
        </ResponseLoadingWrapper>
      </ResponseErrorBoundaries>
    </Grid>
  );
};
