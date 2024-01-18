class popularCities {
    get calgary() { return  cy.get('[href="/discover/calgary/"]')};   
    get vancouver() { return  cy.get('[href="/discover/vancouver/"]')};
};

export default new popularCities();