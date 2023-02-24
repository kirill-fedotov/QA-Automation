/// <reference types="cypress" />

describe('Price filter sorting test', () => {
    it('Filters and sorts items by price', () => {
        cy.viewport(1366, 768)
        // Visit the page where items are displayed
        cy.visit('https://allo.ua/');
        cy.url().should('eq', 'https://allo.ua/')
        
        cy.get(':nth-child(3) > .mm__a').click()
        cy.get(':nth-child(2) > .accordion > .content > .portal-category__list > :nth-child(1) > .portal-category__item-link').click()
        cy.get(':nth-child(2) > .content > .f-wrap > .f-list > .f-check').click()




        // Set the 'from' and 'to' price filters
        const fromPrice = 5000;
        const toPrice = 15000;
        cy.get('.f-range__form > :nth-child(1)').clear().type('5000');
        cy.get('.f-range__form > :nth-child(2)').clear().type('10000')

        // Apply the filters
        cy.get('.f-popup').click();

        // Get all items on the page and verify that they are sorted correctly
        cy.get("div[class='product-card']")
            .should('have.length.gt', 0) // Ensure that there are items on the page
            .then((items) => {
                // Get the prices of all items on the page
                const prices = items.map((i) => parseFloat(cy.wrap(i).find("div[class='v-pb__cur discount']").text()));

                // Verify that prices are within the specified range
                expect(prices.every((p) => p >= fromPrice && p <= toPrice)).to.be.true;

                // Verify that prices are sorted in ascending order
                expect(prices).to.eql(prices.slice().sort((a, b) => a - b));
            });
    });
});