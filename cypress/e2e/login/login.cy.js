import loginPage from "../../fixtures/page_object/login.page";
import header from "../../fixtures/page_object/header";
const loginPageData = require("../../fixtures/test_data/login.json");
const userEmail = Cypress.env("userEmail");
const userPassword = Cypress.env("userPassword");

describe("Login", () => {
  beforeEach(() => {
    cy.visit(loginPage.loginUrl);  
  });

  it("Should login/logout with existing account", () => {
    loginPage.login(userEmail, userPassword);
    header.dashboardButton.should("be.visible");
    header.myAccountButton.click();
    header.logoutButton.click();
    header.logInButton.should("be.visible");
  });

  it("Should not log in without '@' sign in the email", () => {
    loginPage.login(loginPageData.wrongEmail, userPassword);
    loginPage.errorMessageEmail.contains(loginPageData.errorMessage1).should('be.visible');  
  });

  it("Should not log in with wrong credentials", () => {
    loginPage.login(userEmail, "12345567");
    header.errorMessageGeneral.contains(loginPageData.errorMessage2).should('be.visible');  
  });
});
