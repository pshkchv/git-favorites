import { useMemo } from 'react';
import { ApolloError, useQuery } from '@apollo/client';
import Grid from '@mui/material/Unstable_Grid2';

import { RepoList } from './RepoList';
import { ResponseLoadingWrapper } from './ResponseLoadingWrapper';
import { ResponseErrorBoundaries } from './ResponseErrorBoundaries';
import { SearchInput } from './SearchInput';
import { SEARCH_REPOSITORIES } from '../gql';
import { RepoItemType, SearchRepositoriesT } from '../types';
import { RepositoryInfo, SearchRepositoriesResponse } from '../types/gqlTypes';

export const SearchRepositories = ({
  value,
  isSearchRequested,
  onChange,
}: SearchRepositoriesT) => {
  const {
    data,
    loading,
    error,
  }: {
    data?: SearchRepositoriesResponse;
    loading?: boolean;
    error?: ApolloError;
  } = useQuery(SEARCH_REPOSITORIES, {
    variables: { searchKeyword: value },
    skip: !isSearchRequested,
  });

  const repositories = useMemo(() => {
    if (data && data.search.edges.length) {
      return data.search.edges.map(
        ({ node }: { node: RepositoryInfo }) => node,
      );
    }

    return null;
  }, [data]);

  return (
    <Grid xs={6}>
      <SearchInput value={value} onChange={onChange} />
      <ResponseErrorBoundaries error={error}>
        <ResponseLoadingWrapper loading={loading}>
          <RepoList type={RepoItemType.SEARCH} repositories={repositories} />
        </ResponseLoadingWrapper>
      </ResponseErrorBoundaries>
    </Grid>
  );
};
