import { BaseEvent } from "./base-event";

export const RENDER_EVENT = 'events:render-event';

export interface IRenderEventPayload {
  screenshot: string;
}

export class RenderEvent extends BaseEvent<IRenderEventPayload> {
  public constructor(payload: IRenderEventPayload) {
    super(RENDER_EVENT, payload);
  }
}
