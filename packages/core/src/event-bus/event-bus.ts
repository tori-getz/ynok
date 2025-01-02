

import { BaseEvent } from "~/events/base-event";

type TEventCallback = (payload: unknown) => void;

export class EventBus {
  private static instance: EventBus;
  private listeners = new Map<string, Array<TEventCallback>>();

  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      this.instance = new EventBus();
    }

    return this.instance;
  }

  public on(eventName: any, callback: any) {
    const callbacks = [...this.listeners.get(eventName) ?? []];
    callbacks.push(callback);
    this.listeners.set(eventName, callbacks);
  }

  public send(event: BaseEvent<unknown>) {
    console.log(`[${event.eventName}] ${JSON.stringify(event.payload)}`);

    const callbacks = this.listeners.get(event.eventName) ?? [];

    for (const callback of callbacks) {
      callback(event.payload);
    }
  }
}
