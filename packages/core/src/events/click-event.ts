import { BaseEvent } from "./base-event";

export const CLICK_EVENT = 'events:click-event';

export interface IClickEventPayload {
  x: number;
  y: number;
}

export class ClickEvent extends BaseEvent<IClickEventPayload> {
  public constructor(payload: IClickEventPayload) {
    super(CLICK_EVENT, payload);
  }
}
