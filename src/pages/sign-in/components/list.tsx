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
