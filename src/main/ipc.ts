import { GetOs, HandlerEvent, Message } from "@shared/ipc";
import { execSync } from "child_process";
import { ipcMain } from "electron";

interface InvokeArg<T extends Message> extends Pick<T, "chanel"> {
  handler: HandlerEvent<Electron.IpcMainInvokeEvent, T>;
}

export function registerInvokeHandle<T extends Message>(
  arg: InvokeArg<T>
): void {
  ipcMain.handle(arg.chanel, (event, message) => arg.handler(event, message));
}

export function init(): void {
  registerInvokeHandle<GetOs>({
    chanel: "GET_OS",
    handler: () =>
      new Promise((resolve) => {
        const systemInfo = execSync("uname -a").toString();
        resolve(systemInfo);
      }),
  });
}
