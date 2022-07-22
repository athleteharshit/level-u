import { Box, Typography } from '@mui/material';

type Location = {
  lat: string;
  long: string;
  /** Say Something over here*/
  height?: number;
};

type PersonProps = {
  name: string;
  /** Please use the format YYYY-MM-DD */
  birthDate: Date;
  birthLocation: Location;
};

function Person({ name, birthDate, birthLocation }: PersonProps) {
  return (
    <Box>
      Person
      <Typography>{name}</Typography>
      <Typography>{birthDate.getFullYear()}</Typography>
      <Typography>{birthLocation.lat}</Typography>
    </Box>
  );
}

export default Person;
