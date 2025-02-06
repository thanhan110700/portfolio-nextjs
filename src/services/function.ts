import { useLayoutEffect, useState } from "react";

export const GetWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth, window.innerHeight]);
  return size;
};
