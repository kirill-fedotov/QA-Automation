export class BasketPage {


    addItemsToTheBasketAndVerifyInformation() {

        // Set screen size.
        cy.viewport(1366, 768);

        // Open marketplace url.
        cy.visit('https://epicentrk.ua/'); 

        // Verify it.
        cy.url().should('eq', 'https://epicentrk.ua/')

        // Open category and subcategory if it is necessary. Add any item to the basket. Select another category and add an item from that category.
        cy.get("div[class='header__burger']").click()
        cy.get("a[href='https://epicentrk.ua/ua/shop/dacha-sad-i-ogorod/']").click()
        cy.get("a[href='https://epicentrk.ua/ua/shop/motokosy-i-trimmery-sadovye/']").click()
        cy.get('button[data-card-params="1033845, ,1"]').click()
        cy.get("button[class='btn btn--3 btn--white']").click();
        cy.get("li[id='breadcrumb_2']").click();
        cy.get(':nth-child(3) > .shop-category__list > :nth-child(2) > .shop-category__list-title').click();
        cy.get(':nth-child(1) > .shop-category__list > :nth-child(1) > .shop-category__list-title').click();
        cy.get('button[data-card-params="2977006, ,1"]').click();

        // Verify information of items inside the basket.
        cy.xpath("//a[contains(text(),'Gartner BCG-2917')]").should("contain.text", "Gartner BCG-2917")
        cy.xpath("//a[contains(text(),'Atlantic Opro Plain VM 50')]").should("contain.text", "Atlantic Opro Plain VM 50")

        // Verify that the delete item button is clickable.
        cy.get('div[class="basket-product__del"] button[class="basket-product__del--link"]').each(($button) => {
            cy.wrap($button).should('be.visible').should('be.enabled');
        });

    }

    // Verify that the price is calculated correctly.
    calculateTotalAmount() {
        // Get all the prices of products in the cart.
        cy.get('.basket-product__price-main').then(prices => {
            let total = 0;

            // Loop through all the prices and add them up.
            for (let i = 0; i < prices.length; i++) {
                total += parseFloat(prices[i].textContent.replace(' ', ''));
            }

            // Get the total price displayed in the cart.
            cy.get('.basket-purchase__send-sum--new').then(displayedTotal => {
                // Parse the total price
                const parsedDisplayedTotal = parseFloat(displayedTotal.text().replace(' ', ''));

                // Compare the two totals.
                expect(total).to.equal(parsedDisplayedTotal);
            });


        });

    }
}

export const basketPage = new BasketPage()