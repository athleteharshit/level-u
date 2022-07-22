import { Box } from '@mui/material';

type DrawerProps =
  | {
      shape: 'circle';
      radius: number;
    }
  | {
      shape: 'rectangle';
      width: number;
      height: number;
    }
  | {
      shape: 'square';
      width: number;
    };

function Drawer(props: DrawerProps) {
  return <Box>{props.shape}</Box>;
}

export default Drawer;
