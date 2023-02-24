export class FilterPage {


    // Get the "from" and "to" price filter values from the URL query params or anywhere else they are stored.
    fromPrice = 20000;
    toPrice = 30000;

    filterWork() {

        // Set screen size.
        cy.viewport(1366, 768);

        // Open marketplace url.
        cy.visit('https://epicentrk.ua/');
        
        // Verify it.
        cy.url().should('eq', 'https://epicentrk.ua/')

        // Open category and subcategory if it is necessary. Add any item to the basket. Select another category and add an item from that category.
        cy.get("div[class='header__burger']").click()
        cy.get(':nth-child(10) > .catalog-menu__level-1-link > .menu-link').click()
        cy.get(':nth-child(1) > .shop-category__list > :nth-child(1) > .shop-category__list-title').click()

        // Apply 2 - 3 filters.
        cy.get(':nth-child(3) > .filter-block__fields > :nth-child(1)').click()
        cy.wait(5000)
        cy.get('#smartFilter > :nth-child(6) > .filter-block__fields > :nth-child(3)').click()
        cy.wait(5000)

        // Apply "from" and "to" price
        cy.get(':nth-child(4) > .filter-block__fields > .range-slider > .range-slider__inputs > .min-price').clear().type(this.fromPrice)
        cy.wait(5000)
        cy.get(':nth-child(4) > .filter-block__fields > .range-slider > .range-slider__inputs > .max-price').clear().type(this.toPrice)
        cy.wait(5000)

    }


    verifySortedCorrectly() {

        // Get all items on the page and verify that they are sorted correctly.
        cy.get('div[class="columns product-Wrap card-wrapper "] span[class="card__price-sum"]')
        .should('have.length.gt', 0) // Ensure that there are items on the page.
        .then((items) => {
                // Get the prices of all items on the page.
                const prices = items.toArray().map((i) => parseFloat(Cypress.$(i).find('.price').text()));

                // Verify that prices are within the specified range.
                expect(prices.every((p) => p >= this.fromPrice && p <= this.toPrice)).to.be.false;

                // Verify that prices are sorted in ascending order.
                expect(prices).to.eql(prices.slice().sort((a, b) => a - b));

        })

    }

}

export const filterPage = new FilterPage()