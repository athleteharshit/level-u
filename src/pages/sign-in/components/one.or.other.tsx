import { Box } from '@mui/material';

type OneOrOtherProps = { collapsed?: boolean; expanded?: never } | { expanded?: boolean; collapsed?: never };

function OneOrOther(props: OneOrOtherProps) {
  return <Box>OneOrOther {props.collapsed}</Box>;
}

export default OneOrOther;
