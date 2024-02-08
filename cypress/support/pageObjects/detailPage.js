const itemTitle = ".ec_details_right .ec_details_title";
const itemPrice = ".ec_details_right .ec_product_price.ec_product_price_5";
const itemDescription = ".ec_details_description.academy-bug";
const increaseItemCount = ".ec_details_quantity .ec_plus";
const decreaseItemCount = ".ec_details_quantity .ec_minus";
const validateCount = ".ec_details_quantity .ec_quantity";
const addToCartButton = '[value="ADD TO CART"]';
const errorMissingoption = "#ec_details_option_row_error_1_28";
const selectSizeButtonList =
  ".ec_details_swatch.ec_option1.ec_option1_28.ec_active";
module.exports = {
  validateItemDetail(name) {
    // verify user lands on the checkout page
    cy.url().should("include", "/store/");
    //verify the title of the item
    cy.get(itemTitle).should("be.visible").contains(name);
  },
  verifyDescriptionFieldIsPresent() {
    cy.get(itemDescription).should("be.visible");
  },
  increaseItemCount() {
    cy.get(increaseItemCount).should("be.visible").click();
  },
  decreaseItemCount() {
    cy.get(decreaseItemCount).should("be.visible").click();
  },
  validateItemCount(count) {
    // bug in code could not verify count
    cy.get(validateCount).contains(count);
  },
  addItemToCart() {
    cy.get(addToCartButton).should("be.enabled").click();
  },
  verifyErrorShowsUpOnClickingAddToCartWithoutSize() {
    cy.get(errorMissingoption).should(
      "have.text",
      "Missing Option: Select Shirt Size"
    );
  },
  selectSize(size) {
    cy.get(selectSizeButtonList).find(`[title=${size}]`).click();
  },
};
