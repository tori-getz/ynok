import { BaseEvent } from "./base-event";

export const INITIAL_EVENT = 'events:initial-event';

export interface IInitialEventPayload {
  id: string;
  screen: {
    width: number;
    height: number;
  }
}

export class InitialEvent extends BaseEvent<IInitialEventPayload> {
  public constructor(payload: IInitialEventPayload) {
    super(INITIAL_EVENT, payload);
  }
}
