import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface GlobalFilterProps {
  value: string;
  setSearch: (search: string) => void;
  isLoading: boolean;
  dataFiltered: any;
  labelTotalCount: string;
}

export const GlobalFilter = ({
  value,
  setSearch,
  isLoading,
  dataFiltered,
  labelTotalCount,
}: GlobalFilterProps) => (
  <Box
    sx={{ p: 2 }}
    display='flex'
    alignItems='center'
    justifyContent='space-between'
  >
    <TextField
      id='outlined-basic'
      placeholder='Pesquisar...'
      sx={{ width: 300 }}
      value={value || ''}
      onChange={(e) => setSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon fontSize='small' />
          </InputAdornment>
        ),
      }}
    />
    {!isLoading && dataFiltered.length > 0 && (
      <Typography
        variant='h6'
        sx={{ mr: 3 }}
      >{`${dataFiltered.length} ${labelTotalCount}`}</Typography>
    )}
  </Box>
);
