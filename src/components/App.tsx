import { ChangeEvent, useState, useEffect, useCallback } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import { Header } from './Header';
import { FavRepositories } from './FavRepositories';
import { SearchRepositories } from './SearchRepositories';
import { useDebounce } from '../hooks/useDebounce';

export const App = () => {
  const [input, setInput] = useState<string>('');
  const [isSearchRequested, setIsSearchRequested] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedSearchTerm && input) {
      setIsSearchRequested(true);
    }
  }, [debouncedSearchTerm]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);

    if (isSearchRequested) {
      setIsSearchRequested(false);
    }
  }, []);

  return (
    <Grid container spacing={5} sx={{ padding: '0 2rem' }}>
      <Header />

      <SearchRepositories
        value={input}
        isSearchRequested={isSearchRequested}
        onChange={handleChange}
      />

      <FavRepositories />
    </Grid>
  );
};
