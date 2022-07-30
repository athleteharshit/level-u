/* eslint-disable no-console */
import { Box } from '@mui/material';

type Data = {
  name: string;
  location: string;
};

function List() {
  return (
    <Box>
      List
      <Item<Data>
        item={[
          { name: 'harshit', location: 'kanpur' },
          { name: 'gupta', location: 'kanpur' },
          { name: 'shivam', location: 'kanpur' }
        ]}
        renderOptions={(item) => (item.name === 'harshit' ? <strong>{item.name}</strong> : item.name)}
      />
    </Box>
  );
}

type ItemProps<TItem> = {
  item: TItem[];
  renderOptions: (item: TItem) => React.ReactNode;
};

function Item<TItem>({ item, renderOptions }: ItemProps<TItem>) {
  return (
    <>
      {item.map((x, i) => (
        <Box key={i}>{renderOptions(x)}</Box>
      ))}
    </>
  );
}

export default List;

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

// type PageInfo = {
//   id: string;
//   name: string;
// };

// type Page = Record<'home' | 'about', PageInfo>;

// ?* ///
// const getSuffix = (name: string) => {
//   return name;
// };

// let suffix: string | null = getSuffix('harshit');

// if (suffix !== null) {
//   suffix = suffix.toUpperCase();
//   ['gupta', 'saxena'].forEach((name) => name + suffix.toUpperCase());
// }

// if (suffix !== null) {
//   const exampleSuffix = suffix;
//   setTimeout(() => {
//     // eslint-disable-next-line no-console
//     console.log(exampleSuffix.toLowerCase());
//   });
// }
// suffix = null;

// ?* type
// type Prize = {
//   first: string;
//   second: string;
// };

// const logPrize = (prize: Prize) => {
//   let key: keyof Prize;
//   for (key in prize) {
//     console.log(key, prize[key]);
//   }
// };

// const prize = {
//   first: 'gold',
//   second: 'iron'
// };

// logPrize(prize);

// ?* ///
// type Person = {
//   age: number | null;
//   experience: number | null;
// };

// function update(button: number, person: Person | null) {
//   if (button === 1) {
//     if (person) {
//       if (person.age !== null) {
//         if (person.experience !== null) {
//           person.age++;
//           person.experience += 10;
//         } else {
//           throw new Error('Person experience not set');
//         }
//       } else {
//         throw new Error('Person age not set');
//       }
//     }
//   }
// }
