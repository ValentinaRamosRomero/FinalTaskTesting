import { $ } from "@wdio/globals";
import Page from "./page.js";

class SecurePage extends Page {
  get flashAlert() {
    return $("#flash");
  }

  get pageTitle() {
    return $(".title");
  }

  async getPageTitle() {
    return this.pageTitle.getText();
  }

  async isProductPageLoaded() {
    return (await this.inventoryItems.length) > 0;
  }
}

export default new SecurePage();
