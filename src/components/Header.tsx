import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styled from '@emotion/styled';

const HeaderBox = styled(Box)`
  background: #723fed;
  text-align: center;
  color: white;
  font-size: 40px;
  padding: 2rem 0;
`;

export const Header = () => (
  <>
    <CssBaseline />
    <Grid xs={12}>
      <HeaderBox>My Github Favorites</HeaderBox>
    </Grid>
  </>
);


