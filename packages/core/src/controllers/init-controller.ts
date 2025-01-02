import { ComponentStore } from "~/dom/component-store";
import { EventBus } from "~/event-bus/event-bus";
import { IInitialEventPayload, InitialEvent } from "~/events/initial-event";
import { RenderEvent } from "~/events/render-event";
import { Renderer } from "~/renderer/renderer";
import { UserStore } from "~/users/user-store";

export class InitController {
  public static userStore = UserStore.getInstance();

  public static handle(event: IInitialEventPayload) {
    let user = InitController.userStore.getUser(event.id);

    if (!user) {
      user = InitController.userStore.addUser(
        event.id,
        ComponentStore.getInstance().getComponent()!,
        event.screen,
      );
    }

    Renderer.getInstance().renderNode(user.dom, user.screen.width, user.screen.height).then((screenshot) => {
      EventBus.getInstance().send(
        new RenderEvent({ screenshot }),
      );
    });
  }
}
