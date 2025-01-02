import express from 'express';
import * as http from 'node:http';
import { STATIC_DIR } from './constants';

export class HttpServer {
  public static create(): http.Server {
    const app = express();
    app.use(express.static(STATIC_DIR));
    const server = http.createServer(app);
    return server;
  }
}
