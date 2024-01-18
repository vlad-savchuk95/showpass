import registrationPage from "../../fixtures/page_object/registration.page";
import { generateUserData } from "../../helpers/faker.data";
import header from "../../fixtures/page_object/header";
const registrationPageData = require("../../fixtures/test_data/registration.json");
const existedEmail = Cypress.env("userEmail");
let userData = generateUserData();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit(registrationPage.registrationUrl);
  });
  
//   it("Should register new user", () => {
//     registrationPage.firstNameInput.type(userData.firstName);
//     registrationPage.lastNameInput.type(userData.lastName);
//     registrationPage.emailInput.type(userData.email);
//     registrationPage.passwordInput.type(userData.password);
//     registrationPage.passwordConfirmInput.type(userData.password);
//     registrationPage.createAccountButton.click();
//     header.errorMessageGeneral.contains(registrationPageData.accountCreated).should('be.visible');  
//   });

  it("Should not be able to register with an existing email", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(existedEmail);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.passwordConfirmInput.type(userData.password);
    registrationPage.createAccountButton.click();
    header.errorMessageGeneral.contains(registrationPageData.errorEmailAlreadyRegistered).should('be.visible');  
  });

  it("Should not be able to register without '@' sign in the email", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(registrationPageData.emailWithoutAtSign);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.passwordConfirmInput.type(userData.password);
    registrationPage.createAccountButton.click();
    registrationPage.errorMessageEmail.contains(registrationPageData.errorInvalidEmail).should('be.visible');  
  });

  it("Should not be able to register with invalid password length", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.email);
    registrationPage.passwordInput.type(registrationPageData.shortPassword);
    registrationPage.passwordConfirmInput.type(registrationPageData.shortPassword);
    registrationPage.createAccountButton.click();
    registrationPage.errorMessagePassword.contains(registrationPageData.errorInvalidPasswordlength).should('be.visible');  
  });

  it("Should not be able to register without at least one spec character in password", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.email);
    registrationPage.passwordInput.type(registrationPageData.passwordWithoutSpecCharacter);
    registrationPage.passwordConfirmInput.type(registrationPageData.passwordWithoutSpecCharacter);
    registrationPage.createAccountButton.click();
    registrationPage.errorMessagePassword.contains(registrationPageData.errorSpecCharacterPassword).should('be.visible');  
  });
});