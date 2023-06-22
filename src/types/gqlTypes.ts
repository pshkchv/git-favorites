export type RepositoryInfo = {
  id: string;
  nameWithOwner: string;
  viewerHasStarred: boolean;
  primaryLanguage: {
    name: string;
  };
  releases: {
    nodes: {
      name: string;
    }[];
  };
};

export type StarredRepository = {
  node: RepositoryInfo;
};

export type GetStarRepositoriesResponse = {
  viewer: {
    name: string;
    starredRepositories: {
      nodes: StarredRepository[];
    };
  };
};

export type SearchRepository = {
  node: RepositoryInfo;
};

export type SearchRepositoriesResponse = {
  search: {
    repositoryCount: number;
    edges: SearchRepository[];
  };
};
