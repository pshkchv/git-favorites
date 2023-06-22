import { ReactNode, ChangeEvent } from 'react';
import { RepositoryInfo } from './gqlTypes';

export enum RepoItemType {
  SEARCH = 'search',
  FAVORITE = 'favorite',
}

export type RepoListT = {
  type: RepoItemType;
  repositories: RepositoryInfo[] | null;
};

export type ResponseWrapperT = {
  children: ReactNode;
} & (
  | { loading: boolean; error?: never }
  | { error: unknown; loading?: never }
);

export type SearchInputT = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type SearchRepositoriesT = SearchInputT & {
  isSearchRequested: boolean;
};
