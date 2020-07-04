import React, { useEffect, useState } from "react";

const wait = (duration: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

interface Props {
  duration: number;
}

const DataLoader: React.FC<Props> = ({ duration }) => {
  const [wating, setWating] = useState<boolean>(true);
  useEffect(() => {
    wait(duration).then(() => {
      setWating(false);
    });
  }, []);
  return <div data-testid="status">{wating ? "wating" : "done"}</div>;
};

export default DataLoader;
