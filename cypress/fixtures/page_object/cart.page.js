class cartPage {
    get emptyCartMessage() { return cy.get("h3[class='md-display-1']")}
    get removeTicketsButton() {return cy.get('.text-center [aria-label="Remove tickets"]')};
    get eventTitle() { return cy.get("strong[class='block']")};
 };
 
 export default new cartPage();
 