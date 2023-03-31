import scrollPage from "../pageobjects/scroll.page.js";

describe("scroll", () => {
  beforeEach(async () => {
    await scrollPage.open();
  });
  it("the hiding Button is visible", async () => {
    await scrollPage.button.scrollIntoView();
    await expect(scrollPage.button).toExist();
    await expect(scrollPage.button).toBeClickable();
  });

  it("expect to be in the page correct", async () => {
    await expect(browser).toHaveUrl(
      "http://uitestingplayground.com/scrollbars"
    );
    await expect(browser).toHaveUrlContaining("scrollbars");
    await expect(browser).toHaveTitle("Scrollbars");
  });

  it("elements a should be clickable", async () => {
    const linksb = $$("//div[@class='container']//a");
    const linksA = await scrollPage.Links;
    console.log(linksA.length, "here23");
    console.log(await linksb.length, "here24");

    await expect(scrollPage.Links[0]).toExist();
    await expect(scrollPage.Links[1]).toExist();
    await expect(scrollPage.Links[2]).toExist();
    await expect(scrollPage.Links[0]).toBeClickable();
    await expect(scrollPage.Links[1]).toBeClickable();
    await expect(scrollPage.Links[2]).toBeClickable();

    // linksA.forEach(
    //   (element) => {
    //     console.log(element, `elementshere`);
    //     // await expect(element).toBeClickable();
    //   }
    //   // async (element) => await expect(element).toExist()
    // );

    // // await scrollPage.Links.map(async (e) => {
    // //   await expect(e).toBeClickable();
    // });
  });

  it("the links should exist, and should be clickable", async () => {
    await scrollPage.NavLinks.forEach(async (element) => {
      await expect(element).toExist();
    });

    await scrollPage.NavLinks.forEach(async (element) => {
      await expect(element).toBeClickable();
    });
  });
});
