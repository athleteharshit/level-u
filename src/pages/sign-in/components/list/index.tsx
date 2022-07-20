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
