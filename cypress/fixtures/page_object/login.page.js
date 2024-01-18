class loginPage {
    get loginUrl() { return "https://www.showpass.com/accounts/login/"};
    get emailInput() { return cy.get('#email')};    
    get passwordInput() { return cy.get('#password')};    
    get loginButton() { return cy.get('.css-1o7sga4')}; 
    get errorMessageEmail() { return cy.get('.css-14hyele')};
    get errorMessageGeneral() { return cy.get("li[class='chakra-toast']")};
   
    login(email,password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    };
};

export default new loginPage;