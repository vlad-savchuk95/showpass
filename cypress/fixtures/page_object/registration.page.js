class registrationPage {
    get registrationUrl() { return "https://www.showpass.com/accounts/signup/"};
    get firstNameInput() { return cy.get('#firstName')};    
    get lastNameInput() { return cy.get('#lastName')};    
    get emailInput() { return cy.get('#email')};       
    get passwordInput() { return cy.get('#password')};    
    get passwordConfirmInput() { return cy.get('#confirmPassword')};      
    get createAccountButton() { return cy.get('.css-k59gj9 [type="submit"]')};    
    get errorMessagePassword() { return cy.get('.css-14hyele')};
    get errorMessageEmail() {return cy.get('.css-14hyele')};

    registerUser(user) {
        this.firstNameInput.type(user.firstName);
        this.lastNameInput.type(user.lastName);
        this.emailInput.type(user.email);
        this.passwordInput.type(user.password);
        this.passwordConfirmInput.type(user.password);
        this.createAccountButton.click();
      };
};

export default new registrationPage;