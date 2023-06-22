import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { SearchInputT } from '../types';

export const SearchInput = ({ value, onChange }: SearchInputT) => (
  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField
      id="standard-basic"
      label="Type to search"
      variant="standard"
      onChange={onChange}
      value={value}
    />
  </Box>
);
