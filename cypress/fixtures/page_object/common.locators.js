class commonLocators { 
    get buyButton() { return cy.get('.css-1vgwz8i') };
    get addItemButton() {return cy.get('.css-6kl4nq :nth-child(3):eq(0)')}
    get checkoutButton() {return cy.get('.css-tyndg2')}  
 };
 
 export default new commonLocators();