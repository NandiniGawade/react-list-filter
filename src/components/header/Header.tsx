import { FC } from 'react';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: '#1D1F4F',
      color: '#FFFFFF',
      padding: theme.spacing(2.5, 3, 2),
    },
    title: {
      fontSize: 30,
      paddingLeft: theme.spacing(1.25),
    },
  })
);

const Header: FC = () => {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.root} display="flex" flexDirection="row" alignItems="center">
      <Typography variant="h3" className={classes.title}>
        Netherlands Cities
      </Typography>
    </Box>
  );
};

export { Header };
