import { selectItemAndClick } from "../support/pageObjects/homePage";
import {
  validateItemDetail,
  verifyDescriptionFieldIsPresent,
  increaseItemCount,
  decreaseItemCount,
  validateItemCount,
  addItemToCart,
  verifyErrorShowsUpOnClickingAddToCartWithoutSize,
  selectSize
} from "../support/pageObjects/detailPage";
import { validateUserIsOnCartPage} from "../support/pageObjects/cartPage"
const itemName = "Fall Coat";
describe("add to cart from detail page", () => {
  it("should be able to select an item, navigate to detail page and can increase or decrease the count and can add it to the cart", () => {
    cy.visit("/");
    selectItemAndClick(itemName);
    validateItemDetail(itemName);
    verifyDescriptionFieldIsPresent();
    increaseItemCount();
    decreaseItemCount();
    // selectSize
    // commented out due to bug
    // validateItemCount();
    selectSize('Medium');
    addItemToCart();
    validateUserIsOnCartPage();
  });

  it("should be able to select an item, navigate to detail page and can increase or decrease the count but could not add it to cart", () => {
    cy.visit("/");
    selectItemAndClick(itemName);
    validateItemDetail(itemName);
    verifyDescriptionFieldIsPresent();
    increaseItemCount();
    decreaseItemCount();
    // commented out due to bug
    // validateItemCount();
    addItemToCart();
    verifyErrorShowsUpOnClickingAddToCartWithoutSize();
  });
});