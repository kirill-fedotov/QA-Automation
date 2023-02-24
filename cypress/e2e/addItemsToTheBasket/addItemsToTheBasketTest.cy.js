/// <reference types="cypress" />

function calculateTotalAmount() {
    let total = 0
    cy.get('.basket-product__price-main').each(($el) => { // iterate over all product prices 
        const price = parseFloat($el.text().replace(' ', '')) // get the price as a number
        total += price // add the price to the total
    }).then(() => {
        cy.get('.basket-purchase__send-sum--new').should('have.text', total) // verify that the total amount is displayed correctly
    })
}

function uncaughtException() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
}

describe('Basket', () => {
    it('Add items to the basket', () => {
        cy.viewport(1366, 768)
        // Visit the page where items are displayed
        cy.visit('https://allo.ua/');
        cy.url().should('eq', 'https://allo.ua/')
        
        cy.get(':nth-child(3) > .mm__a').click()
        cy.get(':nth-child(2) > .accordion > .content > .portal-category__list > :nth-child(1) > .portal-category__item-link').click()
        cy.get('[data-product-id="11990528"] > .product-card > .product-card__pictures > .product-card__img > .img-carousel > picture.active > .gallery__img').click()
        cy.get('#product-buy-button').should('be.visible').click()
        cy.wait(5000)
        cy.get('.comeback', { timeout: 10000 }).should('be.visible').click()
        cy.get(':nth-child(1) > .b-crumbs__link').click()
        cy.get(':nth-child(10) > .mm__a').click()
        cy.get(':nth-child(1) > .accordion > .content > .portal-category__list > :nth-child(2) > .portal-category__item-link').click()
        cy.get('[data-product-id="7040865"] > .product-card > .product-card__pictures > .product-card__img > .img-carousel > picture.active > .gallery__img').click()
        cy.get('#product-buy-button').should('be.visible').click()
        cy.wait(5000)
        cy.xpath("//span[contains(text(),'Xiaomi TV A2 32')]").should("contain.text", "Xiaomi TV A2 32")
        cy.xpath("//span[contains(text(),'Salta COMBO')]").should("contain.text", "Salta COMBO")

        calculateTotalAmount()
    });

    it('Add items to the basket 2', () => {
        cy.viewport(1366, 768)
        cy.visit('https://allo.ua/')

        cy.get(':nth-child(3) > .mm__a').click()
        cy.get(':nth-child(2) > .accordion > .content > .portal-category__list > :nth-child(1) > .portal-category__item-link').click()
        cy.get('[data-product-id="11990528"] > .product-card > .product-card__pictures > .product-card__img > .img-carousel > picture.active > .gallery__img').click()
        cy.get('#product-buy-button').should('be.visible').click()
        cy.wait(3000)
            
        calculateTotalAmount()
    });

    it('Add items to the basket 3', () => {
        uncaughtException()
        cy.viewport(1366, 768)
        cy.visit('https://epicentrk.ua/ua/shop/motokosa-gartner-bcg-2917.html')
        cy.get("div[class='p-buy'] button[class='p-buy__btn btn btn--yellow']").should('be.visible').click()
        calculateTotalAmount()





        //cy.get("a[title='Сад Город']").click()
        //cy.get("a[data-alt='Мотокоси і тримери садові']").click()

        //cy.get('[data-product-id="11990528"] > .product-card > .product-card__pictures > .product-card__img > .img-carousel > picture.active > .gallery__img').click()
        //cy.get('#product-buy-button').should('be.visible').click()
        //cy.wait(3000)

        //calculateTotalAmount()
    });


});

describe('Shopping cart', () => {
    it.only('should calculate the total price of all products in the cart', () => {
        // Visit the shopping cart page
        uncaughtException()
        cy.viewport(1366, 768)
        cy.visit('https://epicentrk.ua/ua/shop/motokosa-gartner-bcg-2917.html');
        cy.get("div[class='p-buy'] button[class='p-buy__btn btn btn--yellow']").should('be.visible').click();
        cy.get("button[class='btn btn--3 btn--white']").click();
        cy.get("a[title='Каталог']").click();
        cy.get("a[data-alt='Меблі для кухні']").click();
        cy.get("a[data-alt='Кухонні дивани кутові']").click();
        cy.get('#bottom-sticky > :nth-child(2) > .card > .card__info > .card__name > .link > .font-weight-700').click();
        cy.get("div[class='p-buy'] button[class='p-buy__btn btn btn--yellow']").should('be.visible').click()
        calculateTotalAmount2()
    });
});



function calculateTotalAmount2() {
    // Get all the prices of products in the cart
    cy.get('.basket-product__price-main').then(prices => {
        let total = 0;

        // Loop through all the prices and add them up
        for (let i = 0; i < prices.length; i++) {
            total += parseFloat(prices[i].textContent.replace(' ', ''));
        }

        // Get the total price displayed in the cart
        cy.get('.basket-purchase__send-sum--new').then(displayedTotal => {
            // Remove the dollar sign and parse the total price
            const parsedDisplayedTotal = parseFloat(displayedTotal.text().replace(' ', ''));

            // Compare the two totals
            expect(total).to.equal(parsedDisplayedTotal);
        });
    });

}