/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@mui/material';
import List from '../list';

function FormUi() {
  // firstelement array[0];
  // lastelement array[array.length - 1];
  // middleelement (first + last) / 2
  // while(firstelement < lastelement)
  // if(firstelement < lastelement)

  // const array = [-5, 2, 5, 6, 10];
  // function binarySearch(arr: number[], num: number) {
  //   return { arr, num };
  // }

  // console.log(binarySearch(array, 2));

  return (
    <Box>
      Form
      <List />
    </Box>
  );
}

export default FormUi;

// type DrawerProps = { name: string } & (
//   | {
//       shape: 'circle';
//       radius: number;
//     }
//   | {
//       shape: 'rectangle';
//       width: number;
//       height: number;
//     }
//   | {
//       shape: 'square';
//       width: number;
//     }
// );

// function Drawer(props: DrawerProps) {
//   return <Box>{props.shape}</Box>;
// }

// function getDeepValue<TObj, TFirstKey extends keyof TObj, TSecondKey extends keyof TObj[TFirstKey]>(
//   obj: TObj,
//   firstKey: TFirstKey,
//   secondKey: TSecondKey
// ) {
//   return obj[firstKey][secondKey];
// }

// const objs = {
//   foo: {
//     a: 'harshit',
//     b: 23
//   },
//   bar: {
//     e: 435,
//     f: 'fd'
//   }
// };

// const value = getDeepValue(objs, 'foo', 'a');

// type Human = {
//   firstName: string;
//   lastName: string;
// };

// type Animal = {
//   name: string;
// };

// type GetRequiredInformation<TType> = TType extends Animal
//   ? { isFly: boolean }
//   : TType extends Human
//   ? { isRun: boolean }
//   : { isRounded: boolean };

// type RequiredInformationAnimal = GetRequiredInformation<Animal>;
// type RequiredInformationHuman = GetRequiredInformation<Human>;
// type RequiredInformationPlanet = GetRequiredInformation<{ sun: string }>;

// interface Letter {
//   a: number;
//   bis: string;
//   d: {
//     name: boolean;
//   };
// }

// type Letters = Letter[keyof Letter];
// const har: Letters = 34;

// function checkIsArrs<Arg>(
//   a: Arg extends any[] ? "Don't pass an array" : Arg,
//   b: Arg extends any[] ? "Don't pass an array" : Arg
// ): boolean {
//   return a === b;
// }

// checkIsArrs('b', 'c');
