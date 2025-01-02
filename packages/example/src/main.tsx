import Ynok from '@ynok/core';
import { Application } from "@ynok/core";
import { App } from "./app";

const bootstrap = () => {
  const app = new Application({ port: 1337 });

  // @ts-ignore
  app.start(<App />);
};

bootstrap();
