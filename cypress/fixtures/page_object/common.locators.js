class commonLocators { 
    get buyButton() { return cy.get('[data-testid="buy-button-container"]') };
    get addItemButton() {return cy.get('#chakra-modal--body-5 .css-n87g67 [aria-label="Add item"]:eq(0)')}
    get checkoutButton() {return cy.get('.css-tyndg2')}  
 };
 
 export default new commonLocators();