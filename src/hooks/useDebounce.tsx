import { useState, useEffect } from "react";

export const useDebounce = (input: string = "", time: number = 500) => {
  const [debounceValue, setDebounceValue] = useState(input);

  useEffect(() => {
    const tick = setTimeout(() => {
      setDebounceValue(input);
    }, time);
    return () => {
      clearTimeout(tick);
    };
  }, [input]);

  return { debounceValue }
};
