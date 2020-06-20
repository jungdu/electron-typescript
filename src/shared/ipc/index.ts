export interface Message {
  chanel: string;
  message: any;
  res: any;
}

export type HandlerEvent<
  T extends Electron.Event,
  U extends { message: any; res: any }
> = (event: T, message: U["message"]) => Promise<U["res"]>;

export interface GetOs extends Message {
  chanel: "GET_OS";
  message: "";
  res: string;
}
