class highlights {
    get firstEvent() { return cy.get('[data-swiper-slide-index="0"] .css-1dk45er').first()}; 
    get fourthEvent() { return cy.get('[class="css-1lde0xe"] :nth-child(4)')}; 
    get addToCartButton() { return cy.contains("Add to Cart")};
    get totalCartItemsButton() { return cy.get('[id="cart-total"]')}; 
    get dynamicSuccessMessage() { return cy.get('[class="alert alert-success alert-dismissible"]')};
 }
 
 export default new highlights();
