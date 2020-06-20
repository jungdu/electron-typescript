import { invoke } from "@renderer/ipc";
import { GetOs } from "@shared/ipc";
import * as React from "react";

const App: React.FC = () => {
  const [osInfo, setOsInfo] = React.useState<string>("🤔");

  function handleClick(): void {
    invoke<GetOs>({ chanel: "GET_OS", message: "" }).then((resposne) => {
      console.log(resposne);
      setOsInfo(resposne);
    });
  }

  return (
    <div>
      <h1>I want to know my OS!</h1>
      <p>
        <button onClick={handleClick}>Click!</button>:{osInfo}
      </p>
    </div>
  );
};

export default App;
