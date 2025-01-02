import { BaseEvent } from "../events/base-event";
import { WS } from "./ws";

type THandler = (payload: any) => void;

export class EventBus {
  private static listeners = new Map<string, THandler[]>();

  public static send(event: BaseEvent<any>) {
    console.log(`[EventBus] OUTGOING - ${event.eventName}`)

    WS.getInstance().ws!.send(JSON.stringify({
      eventName: event.eventName,
      payload: event.payload,
    }));
  }

  public static on(eventName: string, handler: THandler) {
    const handlers = [...this.listeners.get(eventName) ?? []];
    handlers.push(handler);
    this.listeners.set(eventName, handlers);
  }

  public static listen() {
    WS.getInstance().ws!.onmessage = (ev) => {
      const event = JSON.parse(ev.data) as unknown as BaseEvent<any>;
      console.log('[EventBus] INCOMING - ' + event.eventName)
      const handlers = this.listeners.get(event.eventName) ?? [];
      for (const handler of handlers) {
        handler(event.payload);
      }
    }
  }
}
