import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useGlobalStyle = makeStyles((theme: Theme) =>
  createStyles({
    span: {
      color: theme.palette.primary.main,
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(1.6)} Roboto Sans, sans-serif`,
      textDecorationLine: 'underline',
      cursor: 'pointer'
    }
  })
);

export default useGlobalStyle;
