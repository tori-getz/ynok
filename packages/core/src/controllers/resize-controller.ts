import { EventBus } from "~/event-bus/event-bus";
import { RenderEvent } from "~/events/render-event";
import { IResizeEventPayload } from "~/events/resize-event";
import { Renderer } from "~/renderer/renderer";
import { UserStore } from "~/users/user-store";

export class ResizeController {
  public static handle(event: IResizeEventPayload) {
    UserStore.getInstance().setScreenSize(event.userId, {
      width: event.width,
      height: event.height,
    });

    const user = UserStore.getInstance().getUser(event.userId);

    console.log(user);

    Renderer.getInstance().renderNode(user!.dom, user!.screen.width, user!.screen.height).then((screenshot) => {
      EventBus.getInstance().send(
        new RenderEvent({ screenshot }),
      );
    });
  }
}
