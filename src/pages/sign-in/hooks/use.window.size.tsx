import { useEffect, useState } from 'react';

export type TWindowSizeState = {
  width: undefined | number;
  height: undefined | number;
};

const useWindowSize = () => {
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

  return windowSize;
};
export default useWindowSize;
