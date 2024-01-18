class header {
    get myAccountButton() { return cy.get('button[aria-haspopup="menu"]:eq(1)')}; 
    get dashboardButton() { return cy.get('[aria-label="dashboard"]')};    
    get logoutButton() { return cy.contains('Log Out')}; 
    get shoppingCartButton() { return cy.get('[title="Shopping Cart"]')};   
    get logInButton() {return cy.get('.css-1leuwoo')};
    get errorMessageGeneral() { return cy.get("li[class='chakra-toast']")};
 
    logout() {
        this.myAccountButton.click();
        this.logoutButton.click();
  };
 };
 
 export default new header