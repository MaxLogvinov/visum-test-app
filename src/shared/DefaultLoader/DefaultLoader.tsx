import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { Box } from '@mui/material';

export const DefaultLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh'
    }}
  >
    <CircularProgress />
  </Box>
);
