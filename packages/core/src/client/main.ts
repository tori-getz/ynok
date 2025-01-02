import './style.css';

import { ClickEvent } from "~/events/click-event";
import { EventBus } from "./event-bus";
import { WS } from "./ws";
import { InitialEvent } from "~/events/initial-event";
import { IdStore } from "./id-store";
import { ResizeEvent } from '~/events/resize-event';
import { IRenderEventPayload, RENDER_EVENT } from '~/events/render-event';
import { Viewport } from './viewport';

WS.getInstance().connect();
WS.getInstance().ws!.onopen = () => {
  console.log('[WebSocket] connection opened');
  EventBus.send(
    new InitialEvent({
      id: IdStore.getId(),
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    }),
  );    
}

document.addEventListener('click', (event) => {
  EventBus.send(
    new ClickEvent({
      x: event.clientX,
      y: event.clientY,
    }),
  );
});

window.addEventListener('resize', () => {
  EventBus.send(
    new ResizeEvent({
      userId: IdStore.getId(),
      width: window.innerWidth,
      height: window.innerHeight,
    }),
  );
});

EventBus.on(RENDER_EVENT, (payload: IRenderEventPayload) => {
  Viewport.getInstance().render(payload.screenshot);
});

EventBus.listen();

Viewport.getInstance().listenSize();
