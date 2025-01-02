import { INITIAL_EVENT, InitialEvent } from "~/events/initial-event";
import { EventBus } from "~/event-bus/event-bus";
import { InitController } from "~/controllers/init-controller";
import { RESIZE_EVENT } from "~/events/resize-event";
import { ResizeController } from "~/controllers/resize-controller";

export class Router {
  private static eventBus = EventBus.getInstance();

  public static start(): void {
    this.eventBus.on(INITIAL_EVENT, InitController.handle);
    this.eventBus.on(RESIZE_EVENT, ResizeController.handle);
  }
}
