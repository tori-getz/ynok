import { match } from 'ts-pattern';
import { CLICK_EVENT, ClickEvent } from '~/events/click-event';
import { INITIAL_EVENT, InitialEvent } from '~/events/initial-event';
import { RESIZE_EVENT, ResizeEvent } from '~/events/resize-event';

export const getEventClass = (eventType: string) => {
  return match(eventType)
    .with(INITIAL_EVENT, () => InitialEvent)
    .with(CLICK_EVENT, () => ClickEvent)
    .with(RESIZE_EVENT, () => ResizeEvent)
    .otherwise(() => null);
}
