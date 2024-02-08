const emailField = "#ec_account_login_email";
const passwordField = "#ec_account_login_password";
const signInButton = "button.ec_account_button.signin-gui-bug";
const invalidCredentialsError = '.entry-content.single-entry-content .ec_account_error';
module.exports = {
  verfiyUserIsOnAccountsPage() {
    cy.url().should("include", "/account/");
  },

  loginUser(user, password) {
    cy.get(emailField).should("be.empty").type(user);
    cy.get(passwordField).should("be.empty").type(password);
    cy.get(signInButton).should("be.visible").click();
  },
  incorrectCredentials() {
    cy.get(invalidCredentialsError).should('contain','The username or password you entered is incorrect.')
  }
};
