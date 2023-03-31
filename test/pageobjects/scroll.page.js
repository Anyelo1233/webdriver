import Page from "./page.js";

class scrollPage extends Page {
  get button() {
    return $("#hidingButton");
  }

  get Links() {
    return $$("//div[@class='container']//a");
  }

  get NavLinks() {
    return $$("//div[@id='navbarSupportedContent']//a");
  }

  async open() {
    await super.open("scrollbars");
  }
}

export default new scrollPage();
