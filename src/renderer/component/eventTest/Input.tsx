import React, { ChangeEvent, useState } from "react";

export interface Props {
  initialValue?: string;
}

const InputText: React.FC<Props> = ({ initialValue }) => {
  const [value, setValue] = useState<string>(initialValue ? initialValue : "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value ? e.target.value : "");
  };

  return <input type="text" value={value} onChange={handleChange}></input>;
};

export default InputText;
