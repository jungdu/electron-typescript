import React from "react";

interface Props {
  names: string[];
}

const NameList: React.FC<Props> = ({ names }) => {
  return (
    <ul>
      {names.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;
