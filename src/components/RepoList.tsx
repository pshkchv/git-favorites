import { useCallback } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { RepoItemType } from '../types';
import { useAddStarMutation, useRemoveStarMutation } from '../gql';
import { RepositoryInfo } from '../types/gqlTypes';

type RepoListT = {
  type: RepoItemType;
  repositories: RepositoryInfo[] | null;
};

export const RepoList = ({ type, repositories }: RepoListT) => {
  const addStar = useAddStarMutation();
  const removeStar = useRemoveStarMutation();

  const addFavorite = useCallback((id: string) => () => addStar(id), []);
  const removeFavorite = useCallback((id: string) => () => removeStar(id), []);

  return repositories && repositories.length ? (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Latest tag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories.map(
            ({
              id,
              nameWithOwner,
              viewerHasStarred,
              primaryLanguage,
              releases,
            }) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {nameWithOwner}
                </TableCell>
                <TableCell>{primaryLanguage && primaryLanguage.name}</TableCell>
                <TableCell>
                  {releases.nodes.length > 0 ? releases.nodes[0].name : '-'}
                </TableCell>
                <TableCell>
                  {type === RepoItemType.SEARCH && !viewerHasStarred ? (
                    <Button variant="text" onClick={addFavorite(id)}>
                      Add
                    </Button>
                  ) : (
                    <Button variant="text" onClick={removeFavorite(id)}>
                      Remove
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <div>No {type} repos</div>
  );
};
