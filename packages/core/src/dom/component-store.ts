import { IDocumentNode } from "./dom";

export class ComponentStore {
  public static instance: ComponentStore;
  public componentNode: IDocumentNode | null = null;
  public static getInstance(): ComponentStore {
    if (!this.instance) {
      this.instance = new ComponentStore();
    }
    return this.instance;
  }

  public setComponent(node: IDocumentNode): void {
    this.componentNode = node;
  }

  public getComponent(): IDocumentNode | null {
    return this.componentNode ?? null;
  }
}
