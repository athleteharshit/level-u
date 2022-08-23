import { Box } from '@mui/material';
import { Env } from '../../../../common/constants';

function FormUi() {
  // Write a function called productOfArray which takes in an array of numbers and returns the product of them all
  // var six = productOfArray([1,2,3]) // 6
  // var sixty = productOfArray([1,2,3,10]) // 60
  const { log: c } = console;

  c('hello');

  return (
    <Box>
      Typescript FormU {Env.BASE_URL}
      {/* <List /> */}
      {/* <Person
        name="harshit"
        birthDate={new Date('1997-10-26')}
        birthLocation={{
          lat: '245',
          long: '343',
          height: 445
        }}
      /> */}
      {/* <Drawer shape="circle" radius={7} /> */}
      {/* <OneOrOther expanded /> */}
    </Box>
  );
}

export default FormUi;
