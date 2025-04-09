import { $ } from "@wdio/globals";
import Page from "./page.js";

class SecurePage extends Page {
  get pageTitle() {
    return $(".title");
  }

  async getPageTitle() {
    return this.pageTitle.getText();
  }

}

export default new SecurePage();
