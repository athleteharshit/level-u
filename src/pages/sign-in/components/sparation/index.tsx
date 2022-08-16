import { useEffect, useState } from 'react';
import { TWindowSizeState } from '../../hooks/use.window.size';

// normal way
const Sparation = () => {
  const [windowSize, setWindowSize] = useState<TWindowSizeState>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <p>Current screen width: {windowSize.width}</p>
      <p>Current screen height: {windowSize.height}</p>
    </>
  );
};

// best way
// const Sparation = () => {
//   const windowSize = useWindowSize();

//   return (
//     <>
//       <p>Current screen width: {windowSize.width}</p>
//       <p>Current screen height: {windowSize.height}</p>
//     </>
//   );
// };

export default Sparation;
