import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  get flashAlert() {
    return $("#flash");
  }

  /**
   * Define el selector para el título de la página después del login
   */
  get pageTitle() {
    return $(".title"); // Selector del título de la página después del login
  }

  /**
   * Método para obtener el título de la página
   */
  async getPageTitle() {
    return this.pageTitle.getText();
  }
  /**
   * Método para verificar si estamos en la página de productos
   */
  async isProductPageLoaded() {
    return (await this.inventoryItems.length) > 0;
  }
}

export default new SecurePage();
