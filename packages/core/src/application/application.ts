import { HttpServer } from '~/http';
import type { IApplicationConfiguration } from './configuration.interface';
import { WebSocketServer } from '~/ws';
import { IDocumentNode } from '~/dom/dom';
import { Router } from '~/router/router';
import { ComponentStore } from '~/dom/component-store';

export class Application {
  public constructor(
    private readonly configuration: IApplicationConfiguration,
  ) {}

  public start(component: IDocumentNode): void {
    ComponentStore.getInstance().setComponent(component);
    Router.start();
    
    const http = HttpServer.create();

    WebSocketServer.create(http);

    http.listen(this.configuration.port);
  }
}

