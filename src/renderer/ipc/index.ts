import { Message } from "@shared/ipc";
import { ipcRenderer } from "electron";

export function invoke<T extends Message>(
  arg: Pick<T, "chanel" | "message">
): Promise<T["res"]> {
  return new Promise((resolve) => {
    const { chanel, message } = arg;
    ipcRenderer.invoke(chanel, message).then((result) => {
      resolve(result);
    });
  });
}
