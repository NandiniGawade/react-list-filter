import { FC } from 'react';
import { Box } from '@material-ui/core';

const NothingFound: FC = () => {
  return (
    <Box py={2} px={1.5}>
      Searched city not found.
    </Box>
  );
};

export { NothingFound };
