import { BaseEvent } from './base-event';

export const RESIZE_EVENT = 'events:resize-event';

export interface IResizeEventPayload {
  userId: string;
  width: number;
  height: number;
}

export class ResizeEvent extends BaseEvent<IResizeEventPayload> {
  public constructor(payload: IResizeEventPayload) {
    super(RESIZE_EVENT, payload);
  }
}
