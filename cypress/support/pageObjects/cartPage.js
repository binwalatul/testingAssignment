const removeItemButton = '.ec_cartitem_delete';

module.exports = {
  validateUserIsOnCartPage() {
    cy.url().should('include', '/my-cart/');
  }
};
