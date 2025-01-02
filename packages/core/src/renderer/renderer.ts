import { DOM, IDocumentNode } from "~/dom/dom";
import * as puppeteer from 'puppeteer';

export class Renderer {
  public static instance: Renderer;
  public static getInstance(): Renderer {
    if (!this.instance) {
      this.instance = new Renderer();
    }
    return this.instance;
  }

  public async renderNode(node: IDocumentNode, width: number, height: number) {
    const nodeString = DOM.renderToString(node);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width, height });
    await page.setContent(nodeString);

    const screenshot = await page.screenshot({ encoding: 'base64' });

    await browser.close();

    return `data:image/png;base64,${screenshot}`;
  }
}
