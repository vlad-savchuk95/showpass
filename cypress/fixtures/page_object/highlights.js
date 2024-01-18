class highlights {
    get firstEvent() { return cy.get('[data-swiper-slide-index="0"] .css-1dk45er').first()};
    get secondEvent() { return cy.get('[data-swiper-slide-index="1"] .css-1dk45er').first()};
 }
 
 export default new highlights();
