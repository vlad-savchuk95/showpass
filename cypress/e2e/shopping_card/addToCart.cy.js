import commonLocators from "../../fixtures/page_object/common.locators";
import popularCities from "../../fixtures/page_object/popular.cities";
import highlights from "../../fixtures/page_object/highlights";
import cartPage from "../../fixtures/page_object/cart.page";
const cartPageData = require("../../fixtures/test_data/cart.json");

describe("Shopping Cart", () => {
  beforeEach(() => {
    cy.userLogin();
    cy.visit("/");
  });

  it("Should add/remove product from the cart", () => {
    popularCities.calgary.click();
    highlights.firstEvent
      .invoke("text")
      .as('eventName')
      .then((eventName) => {
    highlights.firstEvent.click();
    commonLocators.buyButton.click();
    commonLocators.addItemButton.click();
    commonLocators.checkoutButton.click();
    cartPage.eventTitle.should('contain.text', `${eventName}`);
    });
    cartPage.removeTicketsButton.click();
    cartPage.emptyCartMessage.should('contain.text', cartPageData.emptyCart )
  });
});
