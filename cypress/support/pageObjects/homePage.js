const moveToItemWithId = (id) => `#ec_product_image_${id}`;
const productTitle = "h3.ec_product_title";
const addToCart = ".ec_product_addtocart";
const productDesc = ".academy-product-description-wrapper";
const item = `.ec_product_li ${productDesc} .ec_image_link_cover`;
const itemPrice = '.ec_price_type1'
module.exports = {
  navigateToHomepage() {
    cy.visit("/");
  },
  selectItemAndClick(itemName) {
    cy.get(item).contains(itemName).click();
  },
  validateLoginToSeePriceIsVisibleForItem(id, itemName) {
    cy.get(moveToItemWithId(id)).find(productTitle).contains(itemName);
    cy.get(moveToItemWithId(id))
      .find(addToCart)
      .should("contain.text", "Login for Pricing");
  },
  clickOnLoginForPricingForItem(id) {
    cy.get(moveToItemWithId(id))
      .find(`${productDesc} ${addToCart}`)
      .should("contain.text", "Login for Pricing")
      .click();
  },
  verifyPriceShowingUpAfterLogin(id, price) {
    cy.get(moveToItemWithId(id))
    .find(`${productDesc} ${itemPrice}`)
    .should("contain.text", price)
    .click();
  }
};
