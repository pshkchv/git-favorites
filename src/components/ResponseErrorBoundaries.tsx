import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styled from '@emotion/styled';

import { ResponseWrapperT } from '../types';

const ErrorBox = styled(Box)`
  background: pink;
  text-align: center;
  font-size: 40px;
  padding: 20rem 0;
`;


export const ResponseErrorBoundaries = ({
  children,
  error,
}: ResponseWrapperT) =>
  error ? (
    <>
      <CssBaseline />
      <Grid xs={12}>
        <ErrorBox>Something went wrong with request</ErrorBox>
      </Grid>
    </>
  ) : (
    children
  );
