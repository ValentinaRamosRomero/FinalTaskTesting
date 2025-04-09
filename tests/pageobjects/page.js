import { browser } from "@wdio/globals";

export default class Page {
  open(path = "") {
    const fullUrl = new URL(path, "https://www.saucedemo.com");
    return browser.url(fullUrl.toString());
  }
}
