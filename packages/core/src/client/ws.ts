export class WS {
  public static instance: WS;
  public ws: WebSocket | null = null;

  public static getInstance(): WS {
    if (!this.instance) {
      this.instance = new WS();
    }

    return this.instance
  }

  public connect() {
    this.ws = new WebSocket('/ws');
  }
}
