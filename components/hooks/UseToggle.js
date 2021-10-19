import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (val) => {
    setValue((curr) => (typeof val === "boolean" ? val : !curr));
  };

  return [value, toggleValue];
};

export default useToggle;
