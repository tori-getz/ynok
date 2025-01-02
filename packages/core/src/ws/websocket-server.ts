import { server as WSServer } from 'websocket';
import * as http from 'node:http';
import { BaseEvent } from '~/events/base-event';
import { EventBus } from '~/event-bus/event-bus';
import { RENDER_EVENT } from '~/events/render-event';

export class WebSocketServer {
  public static create(server: http.Server): WSServer {
    const wss = new WSServer({ httpServer: server });

    wss.on('request', (req) => {
      if (req.resource !== '/ws') {
        req.reject();
        return;
      };

      const connection = req.accept(null, req.origin);

      connection.on('message', (message) => {
        if (message.type === 'utf8') {
          const rawEvent = JSON.parse(message.utf8Data) as BaseEvent<unknown>;

          EventBus.getInstance().send(new BaseEvent(rawEvent.eventName, rawEvent.payload))
        }
      });
  
      connection.on('close', () => {
        console.log('WebSocket connection closed');
      });

      EventBus.getInstance().on(RENDER_EVENT, ({ screenshot }: { screenshot: string }) => {
        connection.sendUTF(JSON.stringify({
          eventName: RENDER_EVENT,
          payload: {
            screenshot,
          },
        }));
      });
    });

    return wss;
  }
}
