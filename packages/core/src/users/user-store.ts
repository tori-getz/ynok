import { IDocumentNode } from "~/dom/dom";
import { IUser, IUserScreen } from "./user.interface";

export class UserStore {
  public static instance: UserStore;
  private users = new Map<string, any>();

  public static getInstance(): UserStore {
    if (!this.instance) {
      this.instance = new UserStore();
    }

    return this.instance;
  }

  public addUser(uuid: string, component: IDocumentNode, screen: IUserScreen): IUser {
    const user: IUser = {
      id: uuid,
      screen,
      dom: component,
    };

    this.users.set(user.id, user);

    return user;
  }

  public getUser(uuid: string): IUser | null {
    return this.users.get(uuid) ?? null;
  }

  public setScreenSize(uuid: string, screen: IUserScreen) {
    const user = this.getUser(uuid);
    user!.screen = screen;
    this.users.set(user!.id, user);
  }
}
