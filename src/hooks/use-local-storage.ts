import { useEffect, useState } from "react";

const getInitialValue = <T>(key: string, initValue: T) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error(`Error parsing localStorage for key "${key}":`, error);
  }

  return initValue instanceof Function ? initValue() : initValue;
};

export function useLocalStorage<T>(key: string, initValue: T) {
  const [value, setValue] = useState(() => getInitialValue<T>(key, initValue));

  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error parsing localStorage for key "${key}":`, error);
    }
  }, [value]);

  return [value, setValue] as const;
}
