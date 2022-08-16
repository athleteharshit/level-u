import { useMemo } from 'react';
import { InlineStyleProps } from '../components/inline-style';

const useStyles = (props: InlineStyleProps) => {
  return useMemo(
    () => ({
      header: { fontWeight: props.isBold ? 700 : 400, fontSize: '24px' }
    }),
    [props]
  );
};

export default useStyles;
