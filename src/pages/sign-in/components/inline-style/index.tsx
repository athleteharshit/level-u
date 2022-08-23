import React, { PropsWithChildren } from 'react';
import useStyles from '../../hooks/use.style';

export type InlineStyleProps = {
  isBold: boolean;
};

// function InlineStyle(props: PropsWithChildren<InlineStyleProps>) {
//   return <h1 style={{ fontWeight: props.isBold ? 700 : 300, fontSize: '24px' }}>{props.children}</h1>;
// }

function InlineStyle(props: PropsWithChildren<InlineStyleProps>) {
  const styles = useStyles(props);

  return <h1 style={styles.header}>{props.children}</h1>;
}

export default InlineStyle;
