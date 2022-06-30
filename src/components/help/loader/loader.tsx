import { makeStyles, createStyles } from '@mui/styles';
import { Backdrop, CircularProgress, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.light,
      minHeight: '100vh'
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: 'var(--white)'
    }
  })
);

function Loader() {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
