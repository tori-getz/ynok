import { IDocumentNode } from "~/dom/dom";

export interface IUserScreen {
  width: number;
  height: number;
}

export interface IUser {
  id: string;
  screen: IUserScreen;
  dom: IDocumentNode;
}
