import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styled from '@emotion/styled';

import { ResponseWrapperT } from '../types';

const LoadingBox = styled(Box)`
  text-align: center;
  padding: 2rem 0;
`;

export const ResponseLoadingWrapper = ({
  children,
  loading,
}: ResponseWrapperT) =>
  loading ? (
    <>
      <CssBaseline />
      <Grid xs={12}>
        <LoadingBox>Loading...</LoadingBox>
      </Grid>
    </>
  ) : (
    children
  );
